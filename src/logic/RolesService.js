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
  url: `${environment.API_URL}/roles`,
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
  url: `${environment.API_URL}/roles?id=${id}&nameId=id_rol&token=${tokenUser}`,
  headers: {     
    'apikey': `${environment.API_KEY}`
  },
  data : data
};

//Execute query and return response
return axios(config)

},
register(name_rol) {

  let user = JSON.parse(auth.getUserLogged());  
  let userToken = user.token_user  

  let date_created_rol = moment(new Date()).format("YYYY-MM-DD");


  const data = qs.stringify(
      { name_rol: `${name_rol}`,            
      date_created_rol: `${date_created_rol}`
   });        

  var config = {
      method: 'post',
      url: `${environment.API_URL}/roles?token=${userToken}&table=users&suffix=user&except`,
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
getRol(id){        
  var config = {
    method: 'get',
    url: `${environment.API_URL}/roles?select=*&linkTo=id_rol&equalTo=${id}`,
    headers: {     
      'apikey': `${environment.API_KEY}`
    }
  };
  
  return axios(config)
  
      },
      update(id_rol,name_rol) {

        let user = JSON.parse(auth.getUserLogged());  
        let userToken = user.token_user                
      
      
        const data = qs.stringify(
            { name_rol: `${name_rol}`,                  
         });        
      
        var config = {
            method: 'put',
            url: `${environment.API_URL}/roles?id=${id_rol}&nameId=id_rol&token=${userToken}`,
            
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