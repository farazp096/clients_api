const { model, Schema } = require("mongoose");

const cardSchema = new Schema({
    cardId:{
      type:Number,
      required:true
    },
    tokenId:{
      type:String,
      required:true
    },
    last4Digits:{
      type:Number,
      required:true
    }
  })

const addressSchema = new Schema({
  apartment:{
    type:String,
    required:[true,"apartment is required"],
    trim:true
   },
   address:{
     type:String,
     required:[true,"address is required"],
     trim:true
   },
   pinCode:{
     type:Number
   }
})

const clientSchema = new Schema({
    email:{
      type:String,
      required:[true,"Email is required"],
      unique:true,
      index: true,
      trim:true
    },

    name:{
      type:String,
      required:[true, "first name is required"],
      trim:true
    },
    contact:{
      type:Number,
      required:[true,"phone number is required"]
    },
    note:{
        type:String,
        trim:true
    },
    addresses:[{
      type:addressSchema,
      required:true
    }],
    
    cards:[{
        type:cardSchema,
        required:true
    }]

  },
  { timestamps: true }
);



module.exports = model("Client", clientSchema);

