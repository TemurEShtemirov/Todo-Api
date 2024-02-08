import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import router from "./routes/_api.js";

async function bootstrap() {
  const app = express();
  // port
  const port = process.env.PORT || 4852;
  // MongoDB Url
  const mongo_url = process.env.DBURL || "mongodb://localhost:27017/todos";

  app.use(express.json());
  app.use("/todo", router);
  mongoose
    .connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`SERVER CONNECTED TO MONGODB SUCCESSFULY`))
    .catch((err) => console.log(`MONGODB ERROR: ${err}`));

  app.listen(port, () => console.log(`Server listening on ${port}`));
}

bootstrap();
