const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use((req, res) => res.send("<h1> helllloooo</h1>"));

app.get("/greeting", (req, res) => {
  res.send({ message: "Welcome to the page" });
});

// app.use(express.static("client/build/static"));

app.listen(8000, () => console.log("listening at port 8000"));
