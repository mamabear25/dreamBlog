const { auth } = require('express-openid-connect');
require('dotenv').config();

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_SECRET,
    baseURL: process.env.AUTH0_BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
};

// const request = require("request");

// const options = { method: 'POST',
//   url: 'https://dev-6el1c40g.us.auth0.com/oauth/token',
//   headers: { 'content-type': 'application/json' },
//   body: '{"client_id":"q7iEaqBySxt6p5yYAwEsHKgqMrVpQAsv","client_secret":"GfdWBM_Zh_DkUOQJ__voVxHTLugsENo12F-NLt46KKDgZ5JnEz7QtU3V8_rzYSYJ","audience":"http://localhost:5000/api","grant_type":"client_credentials"}' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

module.exports = auth(config);
