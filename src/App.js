import { BrowserRouter, Routes, Route } from "react-router-dom"
import StudentList from "./components/StudentList"
import AddStudent from "./components/AddStudent"
import EditStudent from "./components/EditStudent"
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StudentList/>}></Route>
        <Route path='/add' element={<AddStudent/>}></Route>
        <Route path='/edit/:rollno' element={<EditStudent/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App