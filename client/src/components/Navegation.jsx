import { Link } from "react-router-dom";

const Navegation = () => {
  return (
    <div >
      <Link to='/tasks'>      
        <h1>Task APP</h1>
      </Link>  
      <Link to="/tasks-create">Create App</Link>
    </div>
  )
}

export default Navegation
