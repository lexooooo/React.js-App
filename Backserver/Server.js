const Express = require("express");
const Mysql = require("mysql");
const bodyparser = require("body-parser");
const Axios = require("axios");
const cors = require("cors");
const path = require("path");
const app = Express();
app.use(cors());
app.use(Express.json());






const db = Mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kupradze1993@',
    database: 'new_schema',
});




app.post("/api/insert", (req, res) => {

  const mail = req.body.email;
  const Pass = req.body.pass;
  const conf = req.body.conf;

  const insert = "INSERT INTO users (UserName, Password, Confirm) VALUES (?,?,?)";

  db.query(insert, [mail, Pass, conf], (err,res) => {console.log(err);});

  console.log(mail + " " + Pass + " " + conf);
});





app.listen(3001, () => {
    console.log("Connection Succes");
});