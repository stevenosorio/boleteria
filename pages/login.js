import Link from 'next/link'
 
export default function Home() {  
  return ( 
    <div>
        <header>
          <h1>Navegacion</h1>
        </header>

        <main class="" >
          <div  class="flex flex-col mx-80 my-20 rounded-lg border-x-4 border-sky-500 bg-sky-500   ">
          <img class="max-w-l place-content-center" src="./images/latiquetera-logo.png" alt=""/>
            <p class="max-w-xl place-content-center" >Inicia sesión en tu Cuenta</p>
            <form  class="flex flex-col  my-5">
              <input class="" type="text" name="nombre" placeholder="Nombre" id="nombre"/>
              <input type="text" name="apellido" placeholder="Apellido" id="apellido"/>
              <input type="email" name="correo" placeholder="Correo" id="correo"/>
              <input type="number" name="celular" placeholder="Celular" id="celular"/>
              <input class="bg-blue-400" type="submit" value="Crear usuario" id="crear"/>
             </form>
            
          </div>
        </main>

 
 

    </div>
    
     
 

  )
  
}
