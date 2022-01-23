
const mongoose = require("mongoose");

require("dotenv").config();

module.exports = () => {
  return mongoose.connect(
    process.env.MONGODB_URI ||
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.u5gd4.mongodb.net/homeDepot-clone?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};




