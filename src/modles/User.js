 import bcrypt from 'bcrypt';
import { Schema, models, model } from "mongoose";
// import { unique } from "next/dist/build/utils";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: pass => {
        //if password is does not have a length or is less than 5 letter then we thorw an error message
        if (!pass?.length || pass.length < 5) {
          new Error("Password must be at least 5 characters");
          // return false;
        }
      },
    },
  },
   {timestamps: true});

  UserSchema.post('validate', function (user) {
    const notHashedPassword = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHashedPassword, salt);
})

  // UserSchema.pre('save', (next, ...rest) => {
  //   console.log(next)
  //   next(rest);
  // })
//check if user exist if not create a Modle with function name 'User' and 'UserSchema'
export const User = models?.User || model("User", UserSchema);
