
import React, { useState } from "react"
import registerService from '../services/eventos';
import { useRouter } from 'next/router'

const Crear = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        img: "",
        title: "",
        text: "",
        date: "",
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
        if (img.value == '') {

            alert("img invalido");
        } else {
            if (title.value == '') {
                alert("title invalido")
            } else {
                if (text.value == '') {
                    alert("text invalido")

                } else {
                    if (date.value == '') {
                        alert("date invalido")
                    } else {
                        try {
                            const user = await registerService({

                            
                                title: title.value,
                                text: text.value,
                                date: date.value,
                            }) 
                            if (user != null) {
                                router.push('/catalogov')

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
        <div>
            <form class="w-full max-w-sm" onSubmit={handleLogin} >
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            URL de la imagen
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="img" type="text" placeholder="" name='img' onChange={handleInput} value={formData.name} />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="">
                            Artista
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="title" type="text" name='title' placeholder="" onChange={handleInput} value={formData.name} />
                    </div>
                </div>

                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password" type='text'>
                            Lugar
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="text" name='text' type="text" placeholder="" onChange={handleInput} value={formData.name} />
                    </div>
                </div>

                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password" type='text'>
                            Fecha
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="date" name='date' type="text" placeholder="" onChange={handleInput} value={formData.name} />
                    </div>
                </div>

                <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                        <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            CREAR EVENTO
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Crear