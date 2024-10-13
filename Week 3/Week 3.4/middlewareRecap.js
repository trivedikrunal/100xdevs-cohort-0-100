const express = require('express');
const app = express();

// function isAgeEnof(age) {
//     if (age >= 14) {
//         return true;
//     } else {
//         return false;
//     }
// }
function isAgeEnofMiddlware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.json({
            msg: "You are not Enof Age"
        });
    }
}
app.use(isAgeEnofMiddlware);
app.get('/ride1', function (req, res) {

    res.json({
        msg: "You are succful ride1..."
    })


})
app.get('/ride2', function (req, res) {

    res.json({
        msg: "You are succful ride2..."
    })


})

app.listen(3000);