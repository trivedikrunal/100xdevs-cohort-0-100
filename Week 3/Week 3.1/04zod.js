const express = require('express');
const zod = require('zod');
const app = express();
const schema = zod.array(zod.number());
app.use(express.json());
app.post('/health-checkup',function(req,res){ 
    const kindany = req.body.kindany;
    const response = schema.safeParse(kindany);
    if(!response.success){
        res.status(411).json({
            msg : "Unput invild"
        });
    }else{
        
        res.send({response});
    }
});


app.listen(3000);