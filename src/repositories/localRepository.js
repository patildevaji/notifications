let notifications = [];

const saveNotification = (notification) => {
    notifications.push(notification);
};

const getNotifications = () => {
    return notifications;
};

module.exports = { saveNotification, getNotifications };
