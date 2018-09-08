/**
 * Set up Object-Document mapping
 * Identify the database
 */

const mongoose = require('mongoose');
const DB_PORT = 27017;
mongoose.connect('mongodb://localhost:'+DB_PORT+'/user', { useNewUrlParser: true });
const Schema = mongoose.Schema;


const User = new Schema({
    id:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{collection:'user'})

module.exports = User;
