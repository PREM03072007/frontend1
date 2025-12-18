import axios from "axios"
const API="http://localhost:5000/api/students"
export const getStudents=()=>{
    return axios.get(API)
} 
export const createStudent=(data)=>{
    return axios.post(API,data)
}
export const deleteStudent=(rollno)=>{
    return axios.delete(`${API}/${rollno}`)
}
export const updateStudent=(rollno,data)=>{
    return axios.put(`${API}/${rollno}`,data)
}