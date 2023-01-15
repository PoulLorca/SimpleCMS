import axios from "axios";
import qs from "qs";
import { environment } from "@/enviroments/enviroments";
import Cookies from "js-cookie";
import moment from 'moment';
import auth from "./auth";


export default {
    //Get directions
get(){        
var config = {
  method: 'get',
  url: `${environment.API_URL}/relations?select=*&rel=users,directions,roles&type=user,direction,rol`,
  headers: {     
    'apikey': `${environment.API_KEY}`
  }
};

return axios(config)

    },

    //delete directions
delete(id){
//Get token from local storage    
var userData = Cookies.get("userLoged");
var tokenUser = JSON.parse(userData).token_user;

var data = qs.stringify({   
})

//Config request
var config = {
  method: 'delete',
  url: `${environment.API_URL}/users?id=${id}&nameId=id_user&token=${tokenUser}`,
  headers: {     
    'apikey': `${environment.API_KEY}`
  },
  data : data
};

//Execute query and return response
return axios(config)

},
register(name_user,email_user, password_user,direction_user,rol_user) {
    let date_created_user = moment(new Date()).format("YYYY-MM-DD");

    const data = qs.stringify(
        { name_user:`${name_user}`,
          email_user: `${email_user}`,
          password_user: `${password_user}`,
          id_direction_user:`${direction_user}`,
          id_rol_user:`${rol_user}`,
          date_created_user: `${date_created_user}`
        });     

    var config = {
        method: 'post',
        url: `${environment.API_URL}/users?register=true&suffix=user`,
        headers: {      
          'Access-Control-Allow-Origin': '*',     
          'apikey': `${environment.API_KEY}`, 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };

    return axios(config)    
  },  

//Get direction
getUser(id){        
  var config = {
    method: 'get',
    url: `${environment.API_URL}/users?select=*&linkTo=id_user&equalTo=${id}`,
    headers: {     
      'apikey': `${environment.API_KEY}`
    }
  };
  
  return axios(config)
  
      },
      update(id_user,name_user,email_user,password_user,id_direction_user,id_rol_user) {

        let user = JSON.parse(auth.getUserLogged());  
        let userToken = user.token_user                
      
      
        const data = qs.stringify(
            { name_user: `${name_user}`,                  
            email_user: `${email_user}`,                  
            password_user: `${password_user}`,
            id_direction_user: `${id_direction_user}`,
            id_rol_user: `${id_rol_user}`,
         });        
      
        var config = {
            method: 'put',
            url: `${environment.API_URL}/users?id=${id_user}&nameId=id_user&token=${userToken}`,
            
            headers: {      
              'Access-Control-Allow-Origin': '*',             
              'apikey': `${environment.API_KEY}`, 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };    
      
          return axios(config)        
      },
}