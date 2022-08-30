const router = require('express').Router();
const season4 = require('../endpoints/season4');

// Get all episodes of season
router.get('/', async (req, res) => {
  try {
    res.json(season4);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

// Get by episode id
router.get(`/:id`, (req, res) => {
  let items = season4;
  let data = items.find((item) => item.id == req.params.id);
  res.json(data);
});

module.exports = router;
