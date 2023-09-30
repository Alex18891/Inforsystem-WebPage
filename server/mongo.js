const mongoose = require("mongoose");

const UserEnderecoDetailsScehma = new mongoose.Schema(
    {
        userid:{type:String,unique:true,required:true},
        name:{type:String,required:true},
        telefone:{type:String,required:true},
        morada:{type:String,required:true},
        country: {type:String,required:true},
        cdpt: {type:String,required:true},
        state: {type:String,required:true},
        ncontribuinte:{type:String,required:true},
    },
);

const UserDetailsScehma = new mongoose.Schema(
    {
        nome:{type:String,required:true},
        email:{type:String,unique:true,required:true},
        password: {type:String,required:true},
        isVerified: { type: Boolean, default: false },
        verificationToken: String,
        addresses: [UserEnderecoDetailsScehma]
    },
    {
        collection: "UserInfoinforsystem",
    }
);

mongoose.model("UserInfoinforsystem",UserDetailsScehma);



