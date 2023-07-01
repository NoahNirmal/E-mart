// api/server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const app = jsonServer.create();
const PORT = process.env.PORT || 3001;

app.use(middlewares);
app.use(router);

module.exports = app;
