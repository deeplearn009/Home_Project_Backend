import express from "express";
import {
  deleteBook,
  getBooks,
  postBooks,
} from "../controllers/bookController.js";
import {
  deleteBasket,
  getBasket,
  postBasket,
  updateBasket,
} from "../controllers/basketController.js";
import {
  deleteWish,
  getWish,
  postWish,
} from "../controllers/wishlistController.js";

const router = express.Router();

router

  //For books

  .get("/books", getBooks)
  .post("/books", postBooks)
  .delete("/books/:id", deleteBook)

  //For basket

  .get("/basket", getBasket)
  .post("/basket", postBasket)
  .delete("/basket/:id", deleteBasket)
  .patch("/basket/:id", updateBasket)

  //For wishlist

  .get("/wishlist", getWish)
  .post("/wishlist", postWish)
  .delete("/wishlist/:id", deleteWish);

export default router;
