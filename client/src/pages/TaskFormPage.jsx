import { useForm } from "react-hook-form";
import { createTask } from "../api/tasks.api";
import { useNavigate } from "react-router-dom";

export function TaskFormPage() {

    const {register, handleSubmit, formState:{
      errors
    }} = useForm()

    const navegate = useNavigate()

    const onSubmit = handleSubmit(async (data)=>{
      //console.log(data)
      await createTask(data)
      //console.log(res)
      navegate('/tasks')
    })
    
    return (
      <div>
          <form onSubmit={onSubmit}>
            <input type="text" name="title" id="title" placeholder="Titulo"
            {...register("title", {required:true})}
            />

            {errors.title && <span>Este campo es requerido</span>}

            <textarea rows="3" placeholder="Descripción"
            {...register("description", {required:true})}
            ></textarea>
            {errors.description && <span>Este campo es requerido</span>}


            <button type="">Guardar</button>
          </form>
      </div>
    )
  }
  