/**
 * This is the Back-End Server
 * it will process the back-end request
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT_NUM = 3001;
const UserModel = require('./models/user')


/* Create a RESTful API of GET */
app.get('/', (req, res) => {
    res.send("Hello World");
});


app.get('/getUserList',(req,res,next)=>{
    UserModel.find({}).sort({'id':-1}).exec((err,userList)=>{
        if(err){
            console.log(err);
        }else{
            res.json(userList);
        }
    })
})

app.use(bodyParser.json());
app.post('/registeUser', (req, res,next) => {
    let newUser = req.body;
    UserModel.create(newUser,(err)=>{
        if(err){
            console.log(err);
        }else{
            res.json(true);
        }
    })
});

server = app.listen(PORT_NUM, () => {
    console.log('Running on http://localhost:'+PORT_NUM);
});