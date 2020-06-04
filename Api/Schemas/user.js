const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    userName: String,
    categoryName: String,
    projectTitle: String
},{
    timestamps: true
})

module.exports = db.model("User", UserSchema)
