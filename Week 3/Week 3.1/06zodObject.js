const zod = require('zod');
function valited(obj){
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8) 
    });
    const response = schema.safeParse(obj);
    console.log(response);
    
}
valited([1,2,3])
valited({
    email:"krunaltrivedi@gmail.com",
    password:"12345678"
})
valited({
    email:"krunaltrivedigmail.com",
    password:"12345678"
})