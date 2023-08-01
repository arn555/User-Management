const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

// const Variable = mongoose.model("Collection name inside MongoDB", Variable)
const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel;