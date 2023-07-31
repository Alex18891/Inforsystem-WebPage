const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
    {
        nome:{type:String,required:true},
        email:{type:String,unique:true,required:true},
        password: {type:String,required:true},
        isVerified: { type: Boolean, default: false },
        verificationToken: String,
    },
    {
        collection: "UserInfoinforsystem",
    }
);

mongoose.model("UserInfoinforsystem",UserDetailsScehma);