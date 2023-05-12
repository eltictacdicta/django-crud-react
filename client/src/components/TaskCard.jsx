import { useNavigate } from "react-router-dom";

export function TaskCard({ task }){

  const navegate = useNavigate()

  return (
    <div style={{background:"black"}}
    
    onClick={()=>{
      navegate(`/task/${task.id}`)
    }}

    >
        <h1>{task.title}</h1>
        <p>{task.description}</p>
    </div>
  )
}



