import React, { useState } from "react"
import registerService from '../services/register';
import { useRouter } from 'next/router'
import Image from 'next/image'

const Register = () => {
    const router = useRouter()
                           
    const [formData, setFormData] = useState({
        usuario: "",
        contraseña: "",
        apellido: "",
        correo: "",
        numero: ""
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
                if (apellido.value == '') {
                    alert("apellido invalido")

                } else {
                    if (numero.value == '') {
                        alert("numero invalido")
                    } else {
                        try {
                            const user = await registerService({
                                usuario: usuario.value,
                                contraseña: contraseña.value,
                                apellido: apellido.value,
                                correo: correo.value,
                                numero: numero.value,
                                rol: 'cliente'

                            })

                            if (user != null) {
                                router.push('/login')
                            }
                        } catch (error) {
                            console.log('Error credentials')
                            console.log(error);
                        }

                    }
                }
            }
        }


    }


    return (
        <div className="flex flex-col mx-80   rounded-3xl border-4 border-sky-500 bg-white   ">
            <img className="max-w-xs max-h-xs self-center" src="./images/boleteria-logo.png" alt="" />
            <p className="max-w-xl   self-center text-xl" >Registra tu Cuenta como cliente</p>
            <form className="flex flex-col  " onSubmit={handleLogin} >
                <input className="pb-2 bg-slate-200 border-sky-500   my-1 rounded-lg shadow-lg shadow-slate-500" type="text" name="usuario" placeholder="usuario" id="usuario" onChange={handleInput} value={formData.name}
                />
                <input className="pb-2 bg-slate-200 border-sky-500   my-1 rounded-lg shadow-lg shadow-slate-500" type="password" name="contraseña" placeholder="contraseña" id="contraseña" onChange={handleInput} value={formData.contraseña} />
                <input className="pb-2 bg-slate-200 border-sky-500   my-1 rounded-lg shadow-lg shadow-slate-500" type="text" name="apellido" placeholder="Apellido" id="apellido" onChange={handleInput} value={formData.apellido} />
                <input className="pb-2 bg-slate-200 border-sky-500   my-1 rounded-lg shadow-lg shadow-slate-500" type="email" name="correo" placeholder="correo" id="correo" onChange={handleInput} value={formData.correo} />
                <input className="pb-2 bg-slate-200 border-sky-500   my-1 rounded-lg shadow-lg shadow-slate-500" type="number" name="numero" placeholder="numero" id="numero" onChange={handleInput} value={formData.numero} />
                <button type="submit" className="bg-blue-400 py-4 rounded-full">
                    Sign Up
                </button>
            </form>




        </div>





    )
}
export default Register