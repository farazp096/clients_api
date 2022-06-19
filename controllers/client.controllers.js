const Client = require("../models/client.models");


// ---------------------------- add new new client ---------------------------------

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
        addresses:[{
            apartment:apartment,
            address:address,
            picCode:pinCode
        },
        {
            apartment:"another apartment",
            address:"another address",
            picCode:5678
        }
    ],
        cards:[{
            cardId:cardId,
            tokenId:tokenId,
            last4Digits:last4digits
        },
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

