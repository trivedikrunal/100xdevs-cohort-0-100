/*
You need to create 4 routes (4 things that the hospital can do)
*/

const express = require("express");
const app = express();

var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }]
}]
app.use(express.json());
// GET - User can check how many kidneys they have and their health
app.get("/", function (req, res) {
    const jonnKidneys = users[0].kidneys;
    const numberOfKidneys = jonnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < numberOfKidneys; i++) {
        if (jonnKidneys[i].healthy) {

            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

});

// POST - User can add a new kidney
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Kidney added successfully!"
    })

})

// PUT - User can replace a kidney, make it healthy
app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;

    }
    res.json({});

});

// DELETE - User can remove all Unhealthy Kidneys
app.delete("/", function (req, res) {
    if (isThereAtleastOneUnhealtykidneys()) {
        let newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })

            }

        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "Done"
        })
    } else {
        res.status(411).json({
            msg: "You not any unhalthy kidnenys"
        })
    }
})

function isThereAtleastOneUnhealtykidneys() {
    let atleastOneUnhealtykidneys = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealtykidneys = true;
        }
    }
    return atleastOneUnhealtykidneys;
}

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});