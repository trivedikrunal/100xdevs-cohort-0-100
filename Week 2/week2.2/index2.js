const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT = 3006 || 3000

app.get('/', function(req, res) {
  res.send('<b>Hello<b>')
})
app.get('/newpage', function(req, res) {
  res.json({
    name: "Kruanl",
    age: 20
  })
})

app.use(bodyParser.json());
app.post('/newpost', function(req,res){
    const mas = req.body.mas;
    console.log(mas);
    
    res.send({
        college:"ASOIT",
        age:20
    })
})


app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})