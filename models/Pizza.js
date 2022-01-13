const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    craetedAt: {
        type: Date,
        default: Date.now
    },
    size: {
      type: String,
      default: 'Large'
    },
    toppings: []

});

//create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);
//expprts the Pizza model
module.exports = Pizza;