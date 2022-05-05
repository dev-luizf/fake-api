// server.js
const jsonServer = require("json-server");

const PORT = 3001;

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/sign-in", (req, res) => {
  res.jsonp({
    name: "Fulano da Silva",
    email: "email@dominio.com",
    role: "customer",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  });
});

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});
