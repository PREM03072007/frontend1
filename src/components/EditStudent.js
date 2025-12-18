import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getStudents, updateStudent } from "../api"

const EditStudent=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const navigate=useNavigate()
    const {rollno} = useParams()
    
    useEffect(()=>{
        getStudents()
            .then(res=>{
                const student = res.data.find(s => s.rollno === parseInt(rollno))
                if(student){
                    setName(student.name)
                    setEmail(student.email)
                }
            })
    },[rollno])
    
    const submit=async(e)=>{
        e.preventDefault()
        try {
            await updateStudent(rollno, {name, email, rollno: parseInt(rollno)})
            navigate("/")
        } catch (error) {
            console.error('Update failed:', error)
            alert('Failed to update student: ' + (error.response?.data?.message || error.message))
        }
    }
    
    return(
        <>
            <h1>Edit Student</h1>
            <form onSubmit={submit}>
                <label>Name</label>
                <input required value={name} onChange={e=>setName(e.target.value)}/>
                <label>Email</label>
                <input required value={email} onChange={e=>setEmail(e.target.value)}/>
                <button>Update</button>
                
            </form>
        </>
    )
}
export default EditStudent;