const router = require('express').Router();
const episodes = require('../endpoints/episodes');

// Get all episodes
router.get('/', async (req, res) => {
  try {
    res.json(episodes);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

// Get by episode id
router.get(`/:id`, (req, res) => {
  let items = episodes;
  let data = items.find((item) => item.id == req.params.id);
  res.json(data);
});

module.exports = router;
