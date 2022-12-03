import {data} from '../domain/data'

const evetos = async credentials => { 
 
 
    if(window.localStorage.getItem("eventos") == null) {
   
 
        data.push({
            img:credentials.img ,
            title: credentials.title,
            text: credentials.text,
            date: credentials.date,
        })
 
        window.localStorage.setItem("eventos", JSON.stringify(data));
        return data;
    }else{
        let userStorage = JSON.parse(window.localStorage.getItem("eventos"));
 
        data.push({
            img:credentials.img ,
            title: credentials.title,
            text: credentials.text,
            date: credentials.date,
        })
        window.localStorage.setItem("eventos", JSON.stringify(userStorage));
        return userStorage;
    }
}

export default evetos;