import React, { useState } from "react"
import loginrService from '../services/login';
import { useRouter } from 'next/router'
import Image from 'next/image'
const Login = () => {
    const router = useRouter()
  
    const [formData, setFormData] = useState({
        usuario: "",
        contraseña: "",
    });
    const [formSuccess, setFormSuccess] = useState(false)
    const [formSuccessMessage, setFormSuccessMessage] = useState("")

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }
    const handleLogin = async (event) => {
        event.preventDefault()
        if (usuario.value == '') {

            alert("usuario invalido");
        } else {
            if (contraseña.value == '') {
                alert("contraseña invalido")
            } else {
                        try {
                            const login = await loginrService({
                                usuario: usuario.value,
                                contraseña: contraseña.value,
                            })
                            console.log(login);
                            if(login==1){
                                router.push('/catalogoc')
                            }
                            if(login==2){
                                router.push('/catalogov')
                            }
                           
                            if (login != 0) {
                            }
                        } catch (error) {
                            console.log('Error credentials')
                            console.log(error);
                        }

                    
                
            }
        }


    }


    return (
    <div  className="flex flex-col mx-80   rounded-3xl border-4 border-sky-500 bg-white   ">
      <img className="max-w-xs max-h-xs self-center" src="./images/boleteria-logo.png" alt="" />
      <p className="max-w-xl   self-center text-xl" >Inicia sesión en tu Cuenta</p>
      <form  className="flex flex-col  "onSubmit={handleLogin}>
        <input className="pb-2 bg-slate-200 border-sky-500   my-1 rounded-lg shadow-lg shadow-slate-500" type="text" name="usuario" placeholder="usuario" id="usuario"/>
        <input className="pb-2 bg-slate-200 border-sky-500   my-1 rounded-lg shadow-lg shadow-slate-500" type="password" name="contraseña" placeholder="contraseña" id="contraseña"/>
        <input className="bg-blue-400 py-4 rounded-full" type="submit" value="inicio de sesión" id="crear"/>
       </form>
      
    </div>
  
    )
}
export default Login