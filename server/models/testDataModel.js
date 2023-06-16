const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var testDataSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Publisher: {
        href: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        }
    },
    Published_Date: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
    },
    Link: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
});

//Export the model
module.exports = mongoose.model('Test', testDataSchema);