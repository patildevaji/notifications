const axios = require('axios');
require('dotenv').config();

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

const sendToSlack = async (notification) => {
    const message = {
        text: `*${notification.name}*\n\n${notification.description}`
    };
    try {
        const response = await axios.post(SLACK_WEBHOOK_URL, message);
        return response.status === 200;
    } catch (error) {
        console.error('Error sending to Slack:', error);
        return false;
    }
};

module.exports = { sendToSlack };
