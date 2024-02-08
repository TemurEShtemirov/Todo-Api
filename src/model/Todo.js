import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      min: 20,
      max: 100,
    },
    description: {
      type: String,
      require: true,
      max: 500,
    },
    isFinished: {
      type: String,
      enum: ["finished", "not finished"],
      default: "not finished",
    },
  },
  {
    timestamps: true,
  }
);

export const TodoModel = mongoose.model("Todo", TodoSchema);
