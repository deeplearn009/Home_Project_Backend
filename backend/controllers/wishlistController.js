import WishModel from "../models/wishlistModel.js"

const getWish = async (req, res) => {
    const wish = await WishModel.find()
    res.json(wish)
}

const postWish = async (req, res) => {
    const {name, author, price} = req.body
    const wish = {name, author, price}
    await WishModel.create(wish)
    res.json(wish)
}

const deleteWish = async (req, res) => {
    const {id} = req.params
    await WishModel.findByIdAndDelete(id)
    res.json(deleteWish)
}

export {getWish, deleteWish, postWish}