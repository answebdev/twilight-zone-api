const router = require('express').Router();
const season5 = require('../endpoints/season5');

// Get all episodes of season
router.get('/', async (req, res) => {
  try {
    res.json(season5);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

// Get by episode id
router.get(`/:id`, (req, res) => {
  let items = season5;
  let data = items.find((item) => item.id == req.params.id);
  res.json(data);
});

module.exports = router;
