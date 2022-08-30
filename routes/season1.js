const router = require('express').Router();
const season1 = require('../endpoints/season1');

// Get all episodes of season
router.get('/', async (req, res) => {
  try {
    res.json(season1);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

// Get by episode id
router.get(`/:id`, (req, res) => {
  let items = season1;
  let data = items.find((item) => item.id == req.params.id);
  res.json(data);
});

module.exports = router;
