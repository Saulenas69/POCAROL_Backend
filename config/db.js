const mongoose = require('mongoose');

const connection = mongoose.createConnection(`mongodb+srv://saulej31:AteneirSaule@cluster0.wmioag3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).on('open',()=>{console.log("MongoDB Connected");}).on('error',()=>{
    console.log("MongoDB Connection error");
});

module.exports = connection.useDb('POCAROL');