const express = require("express");
const PORT = 3030;
const app = express();
const router = require("./routes/root");

app.use(router);

app.listen(PORT, () => {
  console.log("Server in ascolto");
});
