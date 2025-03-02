const slackService = require('../services/slackService');

const notificationRepo = require('../repositories/localRepository');


const receiveNotification = async (req, res) => {
    const { type, name, description } = req.body;

    if (!type || !name || !description) {
        return res.status(400).json({ error: 'Invalid request data' });
    }

    if (type.toLowerCase() === "warning") {
        const success = await slackService.sendToSlack({ name, description });
        if (!success) {
            return res.status(500).json({ error: 'Failed to send to Slack' });
        }
        return res.json({ status: "forwarded" });
    }
    return res.json({ status: "ignored" });
};

module.exports = { receiveNotification };
