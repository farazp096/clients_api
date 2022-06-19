const express = require("express");
const router = express.Router();

const {
    addClient, showAllClients , showClient

} = require("../controllers/client.controllers");

router.get("/addClient",(req,res)=>{
    res.render("register",{title:"Add Client"})
})
//----------------------------- add client ----------------------
router.post("/addClient", addClient);


//----------------------------- get all clients --------------------
router.get("/getAllClients",showAllClients)


//------------------------------ get single client by id --------------------
router.get("/client/:id",showClient)


module.exports = router;