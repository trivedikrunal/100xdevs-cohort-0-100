const express = require('express');
const zod = require('zod');
const app = express();

function velidedInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });
    return schema.safeParse(obj);
    
}
app.use(express.json());

app.post("/login", function (req, res) {
    const response = velidedInput(req.body);
    if (!response.success) {
        res.json({
            msg: "Invild Input"
        })
        return;

    } else {
        res.json({
            msg: " Input Success"
        })
    }

})
app.listen(3001)

