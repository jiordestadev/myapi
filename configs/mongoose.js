import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

export const initialize = async (app) => {
  const PORT = process.env.PORT;
  try {
    await mongoose.connect(process.env.MONGOURL);
    app.listen(PORT, () => {
      console.log(`SERVER RUNNING ON PORT:${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
