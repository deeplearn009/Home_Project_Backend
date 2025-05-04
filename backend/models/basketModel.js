import mongoose from "mongoose";

const basketSchema = mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: String, required: true },
    count: { type: Number, required: true },
  },
  { timestamps: true },
);

const BasketModel = mongoose.model("Basket", basketSchema);

export default BasketModel;
