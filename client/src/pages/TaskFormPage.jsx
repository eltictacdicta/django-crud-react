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
          {params.id && <button
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
          >Eliminar</button>}
      </div>
    )
  }
  