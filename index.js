'use strict';

require('dotenv').config()

const Fortnite = require('fortnite-api');

const credentials = [
  process.env.EMAIL_ACCOUNT,
  process.env.PASSWORD,
  process.env.CLIENT_LAUNCHER_TOKEN,
  process.env.FORTNITE_CLIENT_TOKEN
];
console.log(credentials)

const api = new Fortnite(credentials);


api.login().then(() => {
  console.log('Logged in.');
})
.catch(err => {
  console.error(err.message);
});
