import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {TaskPage} from './pages/TaskPage'
import { TaskFormPage } from './pages/TaskFormPage' 
import Navegation, {  } from "./components/Navegation";

const App = () => {
  return (
    <BrowserRouter>
      <Navegation/>
      <Routes>
        <Route path='/' element={<TaskPage/>} />
        <Route path='/tasks' element={<TaskPage/>} />
        <Route path='/tasks-create' element={<TaskFormPage/>} />
        <Route path='/task/:id' element={<TaskFormPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
