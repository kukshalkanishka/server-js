const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use("/", express.static(path.join(__dirname, "client/build/")));

app.get("/greeting", (req, res) => {
  res.send({ message: "Welcome to the page" });
});

app.listen(8000, () => console.log("listening at port 8000"));
