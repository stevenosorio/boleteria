import {data} from '../domain/data'


const geteventos=  async credentials => {
 
    console.log(window.localStorage.getItem("eventos"))
     
    if(window.localStorage.getItem("eventos") == null) {
        window.localStorage.setItem("eventos", JSON.stringify(data));
        return data;
    }else{
       
        let userStorage = JSON.parse(window.localStorage.getItem("eventos"));
        return userStorage;
    
    }
   
}

export default geteventos;