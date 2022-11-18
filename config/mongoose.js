
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://vishalpsa:vishal123@cluster0.wqugzor.mongodb.net/?retryWrites=true&w=majority");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', () => {
    console.log('Connected to Database : MongoDB');
});

module.exports = db;
