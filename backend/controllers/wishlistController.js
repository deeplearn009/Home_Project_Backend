import WishModel from "../models/wishlistModel.js";

const getWish = async (req, res) => {
  const wish = await WishModel.find();
  res.json(wish);
};

const postWish = async (req, res) => {
  const { image, name, author, price } = req.body;
  const wish = { image, name, author, price };
  const existingWish = await WishModel.findOne({ name });
  if (existingWish) {
    return res
      .status(409)
      .json({ message: "Conflict: this item already existis it wishlist" });
  }
  await WishModel.create(wish);
  res.json(wish);
};

const deleteWish = async (req, res) => {
  const { id } = req.params;
  await WishModel.findByIdAndDelete(id);
  res.json(deleteWish);
};

export { getWish, deleteWish, postWish };
