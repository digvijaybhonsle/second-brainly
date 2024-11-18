
import mongoose , {model, Schema} from "mongoose";

mongoose.connect("mongodb+srv://digvijaybhonsle007:L0LzETF9JLNQ20iX@cluster0.adnoj.mongodb.net/")

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: { type: String }
})
export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: {type: String},
    content: {type: String},
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },
    authorId: {type: mongoose.Types.ObjectId, ref: 'User', required: true }
})
export const ContentModel = model("Content", ContentSchema);




