const mongoose = require("mongoose");

const url =
  "mongodb+srv://anton:anton@entribd.epuc1vt.mongodb.net/login-with-verfication?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(url);
    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
