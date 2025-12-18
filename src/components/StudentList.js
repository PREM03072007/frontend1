import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getStudents, deleteStudent } from "../api"


const StudentList=()=>{
    const [students,setStudents]=useState([])
    const loadStudents=()=>{
        getStudents().then(res=>{
            setStudents(res.data)
        }).catch(err=>{
            console.error('Load failed:', err)
            alert('Failed to load students. Please check if the backend server is running.')
        })
    }
    const removeStudent=(rollno)=>{
        deleteStudent(rollno).then(()=>{
            loadStudents()
        }).catch(err=>{
            console.error('Delete failed:', err.response?.data || err.message)
            alert('Failed to delete student. Please check if the backend server is running.')
        })
    }
    useEffect(()=>{
        loadStudents()
    },[])
    return(
        <>
            <h1>Student List</h1>
            <Link to="/add">Add Student</Link>
            <table border="1" >
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student)=>{
                            return(
                            <tr key={student.rollno}>
                                <td>{student.rollno}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>
                                    <Link to={`/edit/${student.rollno}`}>Edit</Link>
                                    <button onClick={()=>removeStudent(student.rollno)}>Delete</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
   )
}
export default StudentList;