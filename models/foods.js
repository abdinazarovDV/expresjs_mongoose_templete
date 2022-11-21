const mongoose = require("mongoose");
const { v4 } = require("uuid");

const FoodSchema = mongoose.Schema(
    {
        id: {
            type: String,
            default: v4,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: false
        }
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
)

module.exports.FoodModel = mongoose.model("foods", FoodSchema)