import {users} from '../domain/user_data'

const register = async credentials => { 
    console.log('entra registro' + users);
    console.log(window.localStorage.getItem("users"))
    if(window.localStorage.getItem("users") == null) {
        console.log('entra push' + credentials.numero);
        users.push({
            usuario:credentials.usuario ,
            Contraseña: credentials.contraseña,
            apellido: credentials.apellido,
            Correo: credentials.correo,
            numero : credentials.numero,
            rol:credentials.rol
        })
        console.log(users+ " users");
        window.localStorage.setItem("users", JSON.stringify(users));
        return users;
    }else{
        let userStorage = JSON.parse(window.localStorage.getItem("users"));
        console.log(credentials.apellido + 'credentials')
        console.log('entra push' + credentials.numero);
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