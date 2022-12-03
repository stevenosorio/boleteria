import {users} from '../domain/user_data'

const register = async credentials => { 
 
 
    if(window.localStorage.getItem("users") == null) {
 
        users.push({
            usuario:credentials.usuario ,
            Contraseña: credentials.contraseña,
            apellido: credentials.apellido,
            Correo: credentials.correo,
            numero : credentials.numero,
            rol:credentials.rol
        })
 
        window.localStorage.setItem("users", JSON.stringify(users));
        return users;
    }else{
        let userStorage = JSON.parse(window.localStorage.getItem("users"));
 
        userStorage.push({
            usuario:credentials.usuario ,
            Contraseña: credentials.contraseña,
            apellido: credentials.apellido,
            Correo: credentials.correo,
            numero : credentials.numero,
            rol:credentials.rol
        })
        window.localStorage.setItem("users", JSON.stringify(userStorage));
        return userStorage;
    }
}

export default register;