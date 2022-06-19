const Client = require("../models/client.models");


// ---------------------------- add new client ---------------------------------

exports.addClient = async (req,res,next) => {
  const {email,name,note,apartment,address,contact,pinCode,cardId,tokenId,last4digits} = req.body
 Client.findOne({email:email},(err,user)=>{
   if(user){
    res.send("email already exist")
   }
   else if(err){
    res.send(err)
   }
   else{
    const client = new Client({
        email:email,
        name:name,
        contact:contact,
        note:note,

        addresses:[             // client can have multiple addresses

        // adress 1
            {                   
            apartment:apartment,
            address:address,
            picCode:pinCode
        },

        // hard coded address 2 just to show multiple addresses
        {                                 
            apartment:"another apartment",
            address:"another address",
            picCode:5678
        }
    ],
        cards:[                    // client can have multiple cards details as well 

        // card 1
            {
            cardId:cardId,
            tokenId:tokenId,
            last4Digits:last4digits
        },

        // hard coded card 2 just to show multiple cards
        {
            cardId:9747963270743,
            tokenId:"another tokenId",
            last4Digits:5678
        }
    ]
    })
    client.save((err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
   }
});
  
};

// ---------------------------- get all clients -----------------------------

exports.showAllClients = (req,res)=>{
    Client.find((err,clients)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(clients)
        }
    })
}

// ------------------------------ get single client by id ------------------------

exports.showClient = (req,res)=>{
    Client.findOne({_id:req.params.id},(err,client)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(client)
        }
    })
}

