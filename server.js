const express = require("express");
const Connectdb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

Connectdb();

// app.get("/api/contacts",(req,res)=>{
//     res.status(200).json({message : "Get all contacts"});
// });//without middleware without routes



app.use(express.json()); // json body ko parse kerne me help krta h 

app.use("/api/contacts", require("./routes/contact_routes"));

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
