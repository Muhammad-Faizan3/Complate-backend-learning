const mongoose = require('mongoose');

async function connectDB()  {
    await mongoose.connect("mongodb+srv://faizanbashir01:Faizan%4001@cluster0.v6cfwqm.mongodb.net/backend-practice")

    console.log("Connect to DB")
}

module.exports = connectDB