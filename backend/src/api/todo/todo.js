const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: { type: String, require: true},
    done: {type: boolean, require: true, default: false},
    createdAt: { type: Date, defalut: Date.now }
})

module.exports = restful.model('Todo', todoSchema)