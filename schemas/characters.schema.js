import mongoose from "mongoose";

const CharacterSchema = new mongoose.Schema({
  characterId: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  health: {
    type: Number,
    default: 500,
  },
  power: {
    type: Number,
    default: 100,
  },
  equippedItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

export default mongoose.model("Character", CharacterSchema);
