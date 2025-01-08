const mongoose = require("mongoose");

const Connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING); // yeh connection string ko connect kr rha h
    console.log(
      "database connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err); // yeh error ko console me show kr rh
    process.exit(1);
  }
};

module.exports = Connectdb;  // yeh export kr rha h Connectdb ko