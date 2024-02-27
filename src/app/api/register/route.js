import { User } from "@/modles/User";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export async function POST(req) {
  const body = await req.json();
  //   //connect to our data base frist
  mongoose.connect(process.env.MONGO_URL);
  const pass = body.password;
   if (!pass?.length || pass.length < 5) {
     new Error("Password must be at least 5 characters");

     const notHashedPassword = pass;
     const salt = bcrypt.genSaltSync(10);
     body.password = bcrypt.hashSync(notHashedPassword, salt);
     // return false;
   }
  //create User
  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
