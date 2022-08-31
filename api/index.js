const rateLimit = require('express-rate-limit');
const base = require('../routes/base');
const episodes = require('../routes/episodes');
const season1 = require('../routes/season1');
const season2 = require('../routes/season2');
const season3 = require('../routes/season3');
const season4 = require('../routes/season4');
const season5 = require('../routes/season5');

const app = require('express')();

// Rate Limiting
const limiter = rateLimit({
  windowMs: 100 * 60 * 1000, // 10 mins
  max: 5,
  message: '🙁',
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/', base);
app.use('/episodes', episodes);
app.use('/season1', season1);
app.use('/season2', season2);
app.use('/season3', season3);
app.use('/season4', season4);
app.use('/season5', season5);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
