import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
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
