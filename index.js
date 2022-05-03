// server.js
const jsonServer = require("json-server");

const PORT = 3001;

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  noCors: true
});

server.use(middlewares);
server.use(router);
server.use(jsonServer.bodyParser);

server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});
