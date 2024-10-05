// write basic express boilerplate code,
// with express.json() middleware

const express = require('express');
const {createTodo} = require('./types');
const { todo } = require('./db');
const app = express(); 

app.use(express.json());

app.post('/todo',async function (req, res) {
    const createPaylod = req.body;
    const parsedPaylod = createTodo.safeParse(createPaylod);
    if(!parsedPaylod.success){
        res.status(411).json({
            massage: "You send wrong input"
        })
        return
    }
    //put it in mongodb
    await todo.create({
        title : createPaylod.title,
        deription : createPaylod.deription,
        completed:false
    })
    res.json({
        massage: "Todo Created"
    })

});

app.get('/todos',async function (req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    })
});

app.put('/completed',async function (req, res) {
    const updatePaylod = req.body;
    const parsedPaylod = updateTodo.safeParse(updatePaylod);
    if(!parsedPaylod.success){
        res.status(411).json({
            massage: "You send wrong input"
        })
        return
    }
    await todo.update({
        _id : req.body.id
    },{
        completed : true
    })
    res.json({
        massage : "Todo mark is completed"
    })

});

app.listen(3000);
 