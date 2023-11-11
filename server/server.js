const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());
const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/api", (req, res) => {
  res.json({
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
      },
    ],
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
