 
import { Schema, models, model } from "mongoose";
// import { unique } from "next/dist/build/utils";

const UserSchema = new Schema(
  {
    name: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    phone: {type:String},
    streetAddress: {type: String},
    postalCode: {type: String},
    phone: {type: String},
    city: {type: String},
    country: {type: String},
  },
  { timestamps: true }
);

 

  // UserSchema.pre('save', (next, ...rest) => {
  //   console.log(next)
  //   next(rest);
  // })
//check if user exist if not create a Modle with function name 'User' and 'UserSchema'
export const User = models?.User || model("User", UserSchema);
