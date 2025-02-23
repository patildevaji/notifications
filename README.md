# notifications
Slack notifications for STACKIT Coding-Challenge
Overview

This project is a RESTful web service that receives notifications via a POST endpoint and forwards only Warning-type notifications to a Slack channel using a webhook. Notifications of type Info are ignored.

*Features*
-RESTful API with structured request and response formats.
-Forwarding to Slack for "Warning" notifications.
-Validation of incoming requests.
-Error handling for invalid data and Slack API failures.
-In-memory storage (can be extended to use a database).
-Testing with Jest to ensure functionality.

*Setup & Installation*
1. Prerequisites
  Ensure you have the following installed:
    Node.js (v14+ recommended)
    npm (comes with Node.js)
2. clone repo
  git clone https://github.com/patildevaji/notifications.git
3. install dependencies
  npm i express, axios, jest, supertest, dotenv
4. Environment variables
  PORT=
  SLACK_WEBHOOK_URL=
5. Start the Server
   node src/server.js
6. Run tests
   npm test
      testcases covered
        1. Forwarding a Warning notification.
        2. Ignoring an Info notification.
        3. Handling invalid request data.
