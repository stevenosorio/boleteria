import {users} from '../domain/user_data'

const login = async credentials => {
    console.log(window.localStorage.getItem("users"))
    if(window.localStorage.getItem("users") == null) {
        window.localStorage.setItem("users", JSON.stringify(users));
        return null;
    }else{
        let userStorage = JSON.parse(window.localStorage.getItem("users"));
        let userMap = {};
        userStorage.map( user => {
            if(user.usuario === credentials.usuario && user.Contraseña === credentials.contraseña){
                console.log('login');
                userMap = user;
            }
        })
        return userMap;
    }
}

export default login;