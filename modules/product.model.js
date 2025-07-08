const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,
                'Product name is required'],
        },
        quanitity: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: [true, 'Product price is required'],
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }

);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;