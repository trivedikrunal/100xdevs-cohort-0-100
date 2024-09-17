const jwt = require('jsonwebtoken');

// genrent

const value = {
    name : "Krunal Trivedi",
    accountNumber: 12345
}

//jwt

const token = jwt.sign(value,"secret")
console.log(token);
