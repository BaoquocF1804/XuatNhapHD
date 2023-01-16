const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Persons = new Schema({
    name: {
        type: String
    },
    phone: {
        type: Number
    }
}, {
    collection: 'persons'
});

module.exports = mongoose.model('Persons', Persons);
