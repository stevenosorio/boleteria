import {users} from '../domain/user_data'


const login = async credentials => {
    let sw=0;
    console.log(window.localStorage.getItem("users"))
     
    if(window.localStorage.getItem("users") == null) {
        window.localStorage.setItem("users", JSON.stringify(users));
        return sw;
    }else{
       
        let userStorage = JSON.parse(window.localStorage.getItem("users"));
    
        userStorage.map( user => {
            if(user.usuario === credentials.usuario && user.Contraseña === credentials.contraseña){
                if(user.rol=='cliente'){
                    sw=1
                }else{
                    sw=2
                }
            }
        })
 
        
    }
    return sw;
}

export default login;