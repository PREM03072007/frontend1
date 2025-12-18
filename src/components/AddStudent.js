import { useState } from "react"
import { createStudent } from "../api"
import { useNavigate } from "react-router-dom"
const AddStudent=()=>{
    const [rollno,setRollno]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const navigate=useNavigate()
    const submit=async(e)=>{
        e.preventDefault()
        try {
            await createStudent({rollno:parseInt(rollno),name,email})
            navigate("/")
        } catch (error) {
            console.error('Add failed:', error)
            alert('Failed to add student: ' + (error.response?.data?.message || error.message))
        }
    }
    return(
        <>
            <h1>Add Student</h1>
            <form onSubmit={submit}>
                <label>Roll No</label>
                <input required type="number" value={rollno} onChange={e=>setRollno(e.target.value)}/>
                <label>Name</label>
                <input required value={name} onChange={e=>setName(e.target.value)}/>
                <label>Email</label>
                <input required value={email} onChange={e=>setEmail(e.target.value)}/>
                <button>Add</button>
            </form>
        </>
    )
}
export default AddStudent;