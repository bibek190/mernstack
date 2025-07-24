import mongoose from "mongoose";

const connectDB = async () => {
  const URI = process.env.MONGO_URI;
  try {
    await mongoose.connect(URI);
    console.log("MongoDB connection succesful");
  } catch (err) {
    console.error("Error in connecting MongoDB");
  }
};

export default connectDB;
