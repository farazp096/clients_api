const express = require("express")
const body = require("body-parser")
const ejs = require("ejs")
const urlencoded = require("body-parser/lib/types/urlencoded")
const mongoose = require("mongoose")
require("dotenv").config()
const {MONGODB_URI,PORT} = require("./config")
const routes = require("./routes/client.routes")

const MONGO_URI = MONGODB_URI


const app = express()
app.use(body.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static("public"));


app.use("/", routes);

async function main() {
    try {
      await mongoose.connect(MONGO_URI);
  
      console.log("database connected");
  
      app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
  
  main();