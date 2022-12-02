import React from 'react'
 

const Login = () => {
    return (
    <div  className="flex flex-col mx-80   rounded-3xl border-4 border-sky-500 bg-white   ">
    <img className="max-w-xs max-h-xs self-center" src="./images/boleteria-logo.png" alt=""/>
      <p className="max-w-xl   self-center text-xl" >Inicia sesión en tu Cuenta</p>
      <form  className="flex flex-col  ">
        <input className="pb-2 bg-slate-200 border-sky-500   my-1 rounded-lg shadow-lg shadow-slate-500" type="text" name="usuario" placeholder="Nombre" id="usuario"/>
        <input className="pb-2 bg-slate-200 border-sky-500   my-1 rounded-lg shadow-lg shadow-slate-500" type="text" name="Contraseña" placeholder="Apellido" id="Contraseña"/>
        <input className="bg-blue-400 py-4 rounded-full" type="submit" value="inicio de sesión" id="crear"/>
       </form>
      
    </div>
  
    )
}
export default Login