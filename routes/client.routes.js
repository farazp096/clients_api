const express = require("express");
const router = express.Router();

const {
    addClient, showAllClients , showClient, logOutUser

} = require("../controllers/client.controllers");

router.get("/addClient",(req,res)=>{
    res.render("register",{title:"Add Client"})
})

router.post("/addClient", addClient);

router.get("/getAllClients",showAllClients)

router.get("/client/:id",showClient)

router.patch("/updateClient/:id",(req,res) => {
 
})

router.patch("/deleteClient/:id",(req,res) => {
 
})


module.exports = router;