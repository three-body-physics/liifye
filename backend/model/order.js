var mongoose = require("mongoose");

module.exports = new mongoose.Schema({

    email: String,
    price: Number,
    date: { type: Date, default: Date.now },
    paid: Boolean,
    order: [

        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: Number
        }
    ]

})