import express from 'express'
import { deleteBook, getBooks, postBooks } from '../controllers/bookController'


const router = express.Router()

router

.get('/books', getBooks)
.post('/books', postBooks)
.delete('/books/:id', deleteBook)

export default router

