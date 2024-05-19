import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  itemCode: {
    type: Number,
    unique: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemStat: {
    health: {
      type: Number,
      required: true,
    },
    power: {
      type: Number,
      required: true,
    },
  },
});

export default mongoose.model("Item", ItemSchema);
