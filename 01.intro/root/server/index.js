const express = require("express");
const cors = require('cors');
const server = express();

const HTTP_PORT = process.env.HTTP_PORT | 3001;


server.use(cors())
server.use(express.json());



const users = [
  {
    id: 1,
    name: "Fulano da caixa-d'agua",
    age: 40,
  },
];

server.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));

  if (user) {
    res.status(200);
    res.json(user);
  } else {
    res.setHeader("Content-type", "text/html");
    res.status(404);
    res.sendFile("/src/views/page-not-found.html", { root: __dirname });
  }
});

server.post('/users', (req, res) => {
  const user = req.body;
  console.log(user)
  users.push(user);
  res.status(201)
  res.json(users)
})

server.get("/users", (req, res) => {
  res.status(200);
  res.json(users);
});

server.get("/", (req, res) => {
  res.sendFile("/src/views/index.html", { root: __dirname });
});

server.get("*", (req, res) => {
  res.setHeader("Content-type", "text/html");
  res.status(404);
  res.sendFile("/src/views/page-not-found.html", { root: __dirname });
});

server.listen(HTTP_PORT, () => {
  console.log(`Your server listen on port ${HTTP_PORT}`);
});
