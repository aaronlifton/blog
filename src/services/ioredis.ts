const Redis = require("ioredis");

// External Redis URL, extract the details into environment variables.
// "rediss://red-xxxxxxxxxxxxxxxxxxxx:PASSWORD@HOST:6379"

const renderRedis = new Redis({
	username: process.env.REDIS_SERVICE_NAME, // Render Redis name, red-xxxxxxxxxxxxxxxxxxxx
	host: process.env.REDIS_HOST, // Render Redis hostname, REGION-redis.render.com
	password: process.env.REDIS_PASSWORD, // Provided password
	port: process.env.REDIS_PORT || 6379, // Connection port
	tls: true, // TLS required when externally connecting to Render Redis
});
