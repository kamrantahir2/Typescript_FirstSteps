import express from "express";
import calculator from "./calculator";
const app = express();
import { Operation } from "./calculator";
import bodyParser from "body-parser";
app.use(bodyParser());

app.get("/ping", (_req, res) => {
  res.send("pong");
});

const PORT = 3003;

app.post("/calculate", (req, res) => {
  const { value1, value2, op } = req.body;

  const result = calculator(value1, value2, op as Operation);
  res.send({ result });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
