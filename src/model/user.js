const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    from : {type:String, required:true},
    to : {type:String, required:true},
    subject : {type:String, required:true},
    text : {type:String, required:true}
}, {
    versionKey:false,
  })

module.exports = mongoose.model('user', userSchema)

