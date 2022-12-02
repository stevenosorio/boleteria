import Link from 'next/link'
 
export default function Home() {  
  return ( 
    <div class= "bg-slate-300">
        <header>
          <h1>Navegacion</h1>
        </header>

        <main className="" >
          <div  className="flex flex-col mx-80  rounded-lg border-4 border-sky-500 bg-white   ">
          <img className="max-w-xs max-h-xs self-center" src="./images/boleteria-logo.png" alt=""/>
            <p className="max-w-xl   self-center text-xl" >Inicia sesión en tu Cuenta</p>
            <form  className="flex flex-col  my-5">
              <input className="pb-2 bg-slate-200 border-sky-500   my-1 rounded-lg shadow-lg shadow-slate-500" type="text" name="nombre" placeholder="Nombre" id="nombre"/>
              <input className="pb-2 bg-slate-200 border-sky-500   my-1 rounded-lg shadow-lg shadow-slate-500" type="text" name="apellido" placeholder="Apellido" id="apellido"/>
              <input className="pb-2 bg-slate-200 border-sky-500   my-1 rounded-lg shadow-lg shadow-slate-500" type="email" name="correo" placeholder="Correo" id="correo"/>
              <input className="pb-2 bg-slate-200 border-sky-500   my-1 rounded-lg shadow-lg shadow-slate-500" type="number" name="celular" placeholder="Celular" id="celular"/>
              <input className="bg-blue-400 py-4 rounded-full" type="submit" value="Crear usuario" id="crear"/>
             </form>
            
          </div>
        </main>

 
 

    </div>
    
     
 

  )
  
}
