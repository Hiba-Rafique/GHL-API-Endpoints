require('dotenv').config();
const { HighLevel } = require('@gohighlevel/api-client');

const highLevel = new HighLevel({
  privateIntegrationToken: process.env.ACCESS_TOKEN
});

async function listContacts() {
  try {
    const response = await highLevel.contacts.searchContactsAdvanced({
      locationId: process.env.LOCATION_ID,
      pageLimit: 5,
    });

    console.log('Contacts from GHL:');
    console.log(response);
  } catch (error) {
    console.error('HighLevel error:', error);
  }
}

listContacts();
