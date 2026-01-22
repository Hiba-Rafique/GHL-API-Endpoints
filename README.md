# GoHighLevel API Node js Demo

## Requirements

1. **Install dependencies**:

```bash
npm install express multer node-fetch dotenv axios @gohighlevel/api-client
```

2. **Create a `.env` file** with the following variables:

```env
HIGHLEVEL_CLIENT_ID=YOUR_CLIENT_ID
HIGHLEVEL_CLIENT_SECRET=YOUR_CLIENT_SECRET
LOCATION_ID=YOUR_LOCATION_ID
PAGE_LIMIT=10
REDIRECT_URI=https://localhost:3000/callback
ACCESS_TOKEN=YOUR_ACCESS_TOKEN
```

## Getting Started

1. Run the `token.js` file and follow the instructions specified in the initial comments, to get the OAuth 2.0 Access token.  


2. Run the `main.js` file. You should see the list of contacts from your GoHighLevel account logged in the console.
