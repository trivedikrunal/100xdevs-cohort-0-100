const mongoose = require('mongoose');
const { string } = require('zod');

mongoose.connect("mongodb+srv://admin:admin@cluster0.6sfsi.mongodb.net/todos")
const mongooseSchema = mongoose.Schema({
    title: String,
    deription: String,
    completed: Boolean
})

const todo = mongoose.model('todos',mongooseSchema);

module.exports = {
    todo
} 