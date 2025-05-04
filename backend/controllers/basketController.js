import BasketModel from "../models/basketModel.js";
import { addToObject } from "../utils.js";

const getBasket = async (req, res) => {
  const basket = await BasketModel.find();
  res.json(basket);
};

const postBasket = async (req, res) => {
  console.log(req.body);
  const { image, name, author, price, count } = req.body;
  if (!count) {
    count = 1;
  }

  const existingBasket = await BasketModel.findOne({ name });
  if (existingBasket) {
    existingBasket.count += count;
    await existingBasket.save();
    return res.json(existingBasket);
  }
  const basket = { image, name, author, price, count };
  await BasketModel.create(basket);
  res.json(basket);
};

const updateBasket = async (req, res) => {
  const { id } = req.params;
  const { name, author, price, count } = req.body;
  const updatedData = { name, author, price, count };
  console.log(updatedData);
  await BasketModel.findOneAndUpdate({ id }, updatedData);
  return res.json({ message: "Success" });
};

const deleteBasket = async (req, res) => {
  const { id } = req.params;
  const { count } = req.query;
  // /basket?count=4&name="somename"
  // ?page=1&limit=10
  if (!count) {
    count = 1;
  }
  // if greater than count throw error in front, if less than count then update coun prop in basket, if equal to count then delete
  await BasketModel.findByIdAndDelete(id);
  res.json(deleteBasket);
};

export { getBasket, deleteBasket, postBasket, updateBasket };

// GET, POST, DELETE, (PUT, PATCH) for update, put updates entire object however patch updates part of object
// REST apis
