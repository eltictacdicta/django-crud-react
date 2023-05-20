import { Link } from "react-router-dom";

const Navegation = () => {
  return (
    <div className="flex justify-between py-3">
      <Link to='/tasks'>      
        <h1 className="font-bold text-3xl mb-4">Aplicación de tareas</h1>
      </Link>
      <button className="bg-indigo-500 px-3 py-2 rounded-lg">
        <Link to="/tasks-create">Crear tarea</Link>
      </button>  
    </div>
  )
}

export default Navegation
