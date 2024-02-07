import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

async function bootstrap() {
  const app = express();
  // port
  const port = process.env.PORT || 4852;
  // MongoDB Url
  const mongo_url = process.env.DBURL || "mongodb://localhost:27017/todos";

  mongoose
    .connect(mongo_url, {
      useNewUrlParser: true,
      useCreateInddex: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`SERVER CONNECTED TO MONGODB SUCCESSFULY`))
    .catch(() => console.log(`MONGODB ERROR: ${err}`));

  app.listen(port, () => console.log(`Server listening on ${port}`));
}

bootstrap();
