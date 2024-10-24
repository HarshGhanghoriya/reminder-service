const express = require("express");
const { PORT } = require("../src/config/serverConfig");

const app = express();

function serverStart() {
  app.listen(PORT, () => {
    console.log("servers started",PORT);
  });
}

serverStart();
