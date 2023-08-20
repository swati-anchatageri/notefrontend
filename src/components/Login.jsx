import { useState } from "react"

const Login=()=>{
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")

    const handleSubmit=()=>{
        const payload={
            email,
            pass
        }
        console.log(payload)
        fetch("http://localhost:8008/user/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            localStorage.setItem("token",res.token)
        })
        .catch(err=>console.log(err))
    }

    return(
        <div>
            <h1>Login Here!...</h1>
            <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export {Login}