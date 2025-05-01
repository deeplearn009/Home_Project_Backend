import mongoose from "mongoose";

const wishSchema = mongoose.Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    author: {type: String, required: true},
    price: {type: String, required: true}
}, {timestamps: true})

const WishModel = mongoose.model('Wishlist', wishSchema)

export default WishModel
