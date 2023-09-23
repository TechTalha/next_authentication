import User from "@/models/userModel.js";
import {connect} from "@/dbconfig/dbconfig"
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import  Jwt  from "jsonwebtoken";

connect()

export async function POST(NextRequest){
    try {
       const reqBody = await NextRequest.json()
       const {email, password} = reqBody;
       console.log(reqBody);

       const user = await User.findOne({email})
       if(!user){
        return NextResponse.json({error: "User Does Not Exist"}, {status: 400})
    }
       const validPassword = await bcryptjs.compare(password, user.password)
       if (!validPassword ){
           return NextResponse.json({error: "Invalid Password"}, {status: 400})
       }
       const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email
       }
       const token = await Jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"})
       const response = NextResponse.json({
        message: "Login SuccessFull",
        success: true,
       })
       response.cookies.set("token", token,{
        httpOnly: true,
       })

       return response;
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

