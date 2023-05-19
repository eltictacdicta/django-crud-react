import { useNavigate } from "react-router-dom";

export function TaskCard({ task }){

  const navegate = useNavigate()

  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
    
    onClick={()=>{
      navegate(`/task/${task.id}`)
    }}

    >
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <hr/>
    </div>
  )
}



