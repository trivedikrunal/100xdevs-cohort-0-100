const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0.6sfsi.mongodb.net/newappuser?retryWrites=true&w=majority&appName=Cluster0');
const User = mongoose.model('Users', { name: String, email: String, password: String });
app.use(express.json())
app.post('/signup',async function (req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});
    if(existingUser){
        return res.status(400).send("User Name Already Exiset");
    }
    
    const user = new User({ name: 'Krunal', email: 'krunal@gmail.com', password: '12345678' });
    user.save();
    res.json({
        "msg":"User create succfull"
    })
})


