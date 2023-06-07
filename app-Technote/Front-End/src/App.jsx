import { Routes, Route } from "react-router-dom"
import {DashLayout, Layout, Public} from './components/index'
import { Login, Welcome, NoteList, UsersList, EditUser, NewUserForm, EditNote, NewNote } from "./features/index"



const App = () => {
  return (
      <Routes>
        <Route  element={<Layout/>}>
          <Route index element = {<Public/>} />
          <Route path="login" element={<Login/>}/>

          <Route path="/dash/" element ={<DashLayout/>}>
            <Route index element={<Welcome/>} />

            <Route path="users">
            <Route index element = {<UsersList/>}/>
            <Route path="new" element = {<NewUserForm/>}/>
            <Route path=":id" element = {<EditUser/>}/>

            </Route>

           <Route path="notes">
           <Route index element = {<NoteList/>} />
           <Route path="id" element = {<EditNote/>} />
           <Route path="new" element = {<NewNote/>} />
           </Route>
           
          </Route>
        
        </Route>
      </Routes>
  )
}

export default App