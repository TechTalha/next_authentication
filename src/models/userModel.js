import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,'username is required'],
        unique: true,
    },
    email:{
        type : String,
        required: [true,"email id is required"],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "enter password"],
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,

})
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;