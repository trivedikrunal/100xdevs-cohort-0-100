import { useState } from "react";

export function CreateTodo(){
    //react quary
    const [title,setTitle] = useState("");
    const [deription,setDeription] = useState("");
    return <div>
        <input style={{
            padding:"10px",
            margin:"10px"
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input> <br></br>
        <input style={{
            padding:"10px",
            margin:"10px"
        }} type="text" placeholder="deription" onChange={function(e){
            const value = e.target.value;
            setDeription(e.target.value);
        }}></input> <br></br>
        <button style={{
            padding:"10px",
            margin:"10px"
        }} onClick={{function(){
            fetch("http://localhost:5173/todo",{
                method:"POST",
                body:JSON.stringify({
                    title: title,
                    deription: deription

                }),
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(async function(res){
                const json = await res.json(); 
                alert("Todo ADD")
            })
        }}}>Add a todo</button>
    </div>
}