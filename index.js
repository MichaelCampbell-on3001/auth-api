'use strict';



require('dotenv').config();
const server = require('./src/server.js');
const { authDb } = require('./src/auth/models/index');

authDb.sync().then(() => {
  server.start(process.env.PORT || 3001);
});