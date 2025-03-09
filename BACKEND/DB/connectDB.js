const mongoose = require("mongoose");
MONGO_URI = 'mongodb+srv://supriyogiri372:eLs0Q9ir5Y7Qhp9Z@cluster0.aid7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
