import { useState } from "react"

const Signup=()=>{
    const [email,setEmail]=useState("")
    const [userName,setUserName]=useState("")
    const [pass,setPass]=useState("")

    const handleSubmit=()=>{
        const payload={
            email,
            userName,
            pass
        }
        console.log(payload)
        fetch("http://localhost:8008/user/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return(
        <div>
            <h1>Sign Up Here!...</h1>
            <input type="text" placeholder="username" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export {Signup}