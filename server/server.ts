import express, { Express, Request, Response , Application } from 'express';
require("dotenv").config();

const port = process.env.PORT;
const app: Application = express();
var fs = require('fs');

const cors = require("cors");

app.use(cors());
app.use(express.json());

// AUTO INCLUDE ROUTE
fs.readdirSync('./routes').map( (route:any) => app.use(require(`./routes/${route}`)) );

// get driver connection
const database = require("./db/database");

app.listen(port, async() => {

  // perform a database connection when server starts
  await database.connectToServer(function (err: any) {
    if (err) console.error(err);
  });
   
  console.log(`Server is running on port: ${port}`);
  
});