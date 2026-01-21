const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

// to get the token, first we have to click on the installation link for the app 
// then the code is retrieved from the callback url and exchanged for access and refresh token
// paste the access token in .env file

app.get('/callback', async (req, res) => {
  const code = req.query.code; // takes code in query part of the callback url 

  if (!code) return res.send('No code received'); 
  console.log('Received OAuth code:', code);

  try {
    
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', process.env.HIGHLEVEL_CLIENT_ID);
    params.append('client_secret', process.env.HIGHLEVEL_CLIENT_SECRET);
    params.append('redirect_uri', process.env.REDIRECT_URI);
    params.append('code', code);
    params.append('user_type', 'Company');

    // exchange code for token
    const tokenResponse = await axios.post(
      'https://services.leadconnectorhq.com/oauth/token',
      params.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
      }
    );

    console.log('Access Token:', tokenResponse.data.access_token);
    console.log('Refresh Token:', tokenResponse.data.refresh_token);

    res.send('Authorization successful! Check your terminal for the token.');
  } catch (err) {
    console.error('Error exchanging code:', err.response?.data || err.message);
    res.send('Error exchanging code. Check console.');
  }
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/callback`);
  console.log('Open the OAuth URL in your browser to start the flow.');
});
