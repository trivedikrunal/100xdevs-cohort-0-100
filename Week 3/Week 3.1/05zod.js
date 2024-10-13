const { response } = require('express');
const zod = require('zod');
function valited(arr){
    const schema = zod.array(zod.number());
    const response = schema.safeParse(arr);
    console.log(response);
    
}
valited([1,2,3])
valited(["1",2,3])