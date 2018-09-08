const mongoose = require('mongoose');

const userSchema = require('../schemas/user')
const User = mongoose.model('User',userSchema)

// insert default data
User
.remove({}) // Remove existing user data for test
.then(() => {
    new User({id:"KiraKira@qq.com",name:"KiraKira",password:"qwer1234~"}).save();
    new User({id:"NoraMIMI@qq.com",name:"NoraMIMI",password:"qaz000000."}).save();
    new User({id:"Banananice@qq.com",name:"Banananice",password:"ghgh1029~"}).save();
    new User({id:"AliceGear@360.com",name:"AliceGear",password:"qwer1234+"}).save();
    new User({id:"ibgr@gmail.com",name:"Admin",password:"poiu0987~"}).save();
});


module.exports = User;