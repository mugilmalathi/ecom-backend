const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({

    id:{type: Number},
    title:{type: String},
    color: {type: String},
    gender: {type: String},
    category: {type: String},
    description: {type: String},
    price:{type: Number},
    rating:{type: Number},
    image:{type: String}
    
},{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("grocery", grocerySchema);