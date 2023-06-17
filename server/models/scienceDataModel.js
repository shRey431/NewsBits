const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var scienceDataSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Publisher: {
        href: {
            type: String,
        },
        title: {
            type: String,
        }
    },
    Published_Date: {
        type: String,
    },
    Description: {
        type: String,
    },
    Link: {
        type: String,
    },
    Image: {
        type: String,
    },
});

//Export the model
module.exports = mongoose.model('science', scienceDataSchema);