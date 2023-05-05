import { useForm } from "react-hook-form";

export function TaskFormPage() {

    const {register, handleSubmit} = useForm()

    const onSubmit = handleSubmit(data=>{
      console.log(data)
    })
    
    return (
      <div>
          <form onSubmit={onSubmit}>
            <input type="text" name="title" id="title" placeholder="Titulo"
            {...register("title", {required:true})}
            />
            <textarea rows="3" placeholder="Descripción"
            {...register("description", {required:true})}
            ></textarea>
            <button type="">Guardar</button>
          </form>
      </div>
    )
  }
  