const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const gifSchema = new Schema({
   url: {type: String, required: true},
   name: {type: String, required: true},
   description: String,
   gifId: String,
   addedBy: String
});

module.exports = model('Gifs', gifSchema)