import BookModel from "../models/bookModel.js"

const getBooks = async (req, res) => {
    const books = await BookModel.find()
    res.json(books)
}

const postBooks = async (req, res) => {
    const {name, author, price} = req.body
    const book = {name, author, price}
    await BookModel.create(book)
    res.json(book)
}

const deleteBook = async (req, res) => {
    const {id} = req.params
    await BookModel.findByIdAndDelete(id)
    res.json(deleteBook)
}

export {getBooks, postBooks, deleteBook}