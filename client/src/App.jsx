import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {TaskPage} from './pages/TaskPage'
import { TaskFormPage } from './pages/TaskFormPage' 
import Navegation, {  } from "./components/Navegation";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navegation/>
        <Routes>
          <Route path='/' element={<TaskPage/>} />
          <Route path='/tasks' element={<TaskPage/>} />
          <Route path='/tasks-create' element={<TaskFormPage/>} />
          <Route path='/task/:id' element={<TaskFormPage/>} />
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  )
}

export default App
