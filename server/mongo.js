const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
    {
        nome:{type:String,required:true},
        username:{type:String,unique:true,required:true},
        email:{type:String,unique:true,required:true},
        password: {type:String,required:true},
    },
    {
        collection: "UserInfoinforsystem",
    }
);

mongoose.model("UserInfoinforsystem",UserDetailsScehma);