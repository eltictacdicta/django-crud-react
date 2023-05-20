import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TaskFormPage() {

    const {register, handleSubmit, formState:{
      errors
    },setValue} = useForm()

    const navegate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async (data)=>{
      //console.log(data)
      if(params.id){
        await updateTask(params.id,data)
        toast.success('Tarea Actualizada',{
          position:'bottom-right',
          style:{
            background: '#101010',
            color: '#fff'
          }
        })
      }
      else{
        await createTask(data)
        toast.success('Tarea Creada',{
          position:'bottom-right',
          style:{
            background: '#101010',
            color: '#fff'
          }
        })
      }
      //console.log(res)
      navegate('/tasks')
    })

    useEffect(()=>{
      async function loadTask() {
        if(params.id){
          const {data} = await getTask(params.id)
          setValue('title', data.title)
          setValue('description', data.description)
        }
      }
      loadTask()
    },[])
    
    return (
      <div className="max-w-xl mx-auto">
          <form onSubmit={onSubmit}>
            <input type="text" name="title" id="title" placeholder="Titulo"
            {...register("title", {required:true})}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
            />

            {errors.title && <span>Este campo es requerido</span>}

            <textarea rows="3" placeholder="Descripción"
            {...register("description", {required:true})}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
            ></textarea>
            {errors.description && <span>Este campo es requerido</span>}


            <button 
              className="bg-indigo-500 p-3 rounded-lg block w-full mt-3"
            >Guardar</button>
          </form>
          {params.id && 
          <div className="flex justify-end">
              <button
              className="bg-red-500 p-3 rounded-lg w-48 mt-3"
              onClick={async ()=>{
                const accepted = window.confirm('¿Estas seguro?')
                if (accepted){
                  await deleteTask(params.id)
                  toast.success('Tarea Eliminada',{
                    position:'bottom-right',
                    style:{
                      background: '#101010',
                      color: '#fff'
                    }
                  })
                  navegate('/tasks')
                }              
              }}
            >Eliminar</button>
          </div>
          }
      </div>
    )
  }
  