const episodes = require('./episodes');
const season1 = require('./season1');
const season2 = require('./season2');
const season3 = require('./season3');
const season4 = require('./season4');
const season5 = require('./season5');

module.exports = () => ({
  episodes,
  season1,
  season2,
  season3,
  season4,
  season5,
});
