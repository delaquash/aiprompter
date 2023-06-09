import { Schema, model, models } from "mongoose"
interface ISChema {
    email: string;
    username: string;
    image: string;
    // _id: number
}

const UserSchema= new Schema({
    email: {
        type: String,
        unique: [true, "Email already exist!!!"],
        required: [true, "Email is required!!!"]
    },
    username: {
        type: String,
        required: [true, "Username is required!!!"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },

    image: {
        type: String,
      }, 
    //   _id: {
    //     type: Number,
    //   }
    });

    const User =models.User<ISChema> || model<ISChema>("User", UserSchema);
    export default User;