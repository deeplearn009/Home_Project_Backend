import BasketModel from "../models/basketModel.js"

const getBasket = async (req, res) => {
    const basket = await BasketModel.find()
    res.json(basket)
}

const postBasket = async (req, res) => {
    const {image, name, author, price, count} = req.body
    const basket = {image, name, author, price, count}
    await BasketModel.create(basket)
    res.json(basket)
}

const deleteBasket = async (req, res) => {
    const {id} = req.params
    await BasketModel.findByIdAndDelete(id)
    res.json(deleteBasket)
}

export {getBasket, deleteBasket, postBasket}