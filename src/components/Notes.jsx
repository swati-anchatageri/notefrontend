import { useEffect, useState } from "react"

const Notes=()=>{
    const [notes,setNotes]=useState([])
    
    useEffect(()=>{
        fetch("http://localhost:8008/notes",{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>res.json())
        .then(res=>{
            console.log(notes)
            setNotes(res)
            
        })
        .catch(err=>console.log(err))
    },[])

    return(
        <div>
            <h1>Your Notes are here...</h1>
            {notes.map((ele)=>(
                <>
                    <h2>{ele.title}</h2>
                    <p>{ele.body}</p>
                </>
            ))}
        </div>
    )
}

export {Notes}