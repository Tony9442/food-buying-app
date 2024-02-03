import { User } from "@/modles/User";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.json();
  //   //connect to our data base frist
  mongoose.connect(process.env.MONGO_URL);
  //create User
  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
