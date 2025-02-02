const redis = require('redis');
require('dotenv').config();

const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

redisClient.on('error', (err) => console.error('Redis error:', err));

redisClient.connect()
  .then(() => console.log('Connected to Redis'))
  .catch((err) => console.error(err));

module.exports = redisClient;
