const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const PORT = process.env.PORT || 3001;

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(pino);
server.use(express.json());

const items = [];

//Exemplo: { id: 1, value: 40, date: "05/04/2023", observation: "Text", type: "Receita" }

server.get("/items", (req, res) => {
  res.json(items);
});

server.post("/items", (req, res) => {
  const { id, value, date, observation, type } = req.body;
  items.push({ id, value, date, observation, type });
  res.status(201).send();
});

server.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  const index = items.findIndex((item) => item.id === parseInt(id));
  items.splice(index, 1);
  res.status(204).send();
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});