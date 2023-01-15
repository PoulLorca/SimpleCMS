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
  url: `${environment.API_URL}/cities`,
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
  url: `${environment.API_URL}/cities?id=${id}&nameId=id_city&token=${tokenUser}`,
  headers: {     
    'apikey': `${environment.API_KEY}`
  },
  data : data
};

//Execute query and return response
return axios(config)

},
register(name_city) {

  let user = JSON.parse(auth.getUserLogged());  
  let userToken = user.token_user  

  let date_created_city = moment(new Date()).format("YYYY-MM-DD");


  const data = qs.stringify(
      { name_city: `${name_city}`,      
      date_created_city: `${date_created_city}`      
   });        

  var config = {
      method: 'post',
      url: `${environment.API_URL}/cities?token=${userToken}&table=users&suffix=user&except`,
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
getCity(id){        
  var config = {
    method: 'get',
    url: `${environment.API_URL}/cities?select=*&linkTo=id_city&equalTo=${id}`,
    headers: {     
      'apikey': `${environment.API_KEY}`
    }
  };
  
  return axios(config)
  
      },
      update(id_city, name_city) {

        let user = JSON.parse(auth.getUserLogged());  
        let userToken = user.token_user                
      
      
        const data = qs.stringify(
            { name_city: `${name_city}`,                  
         });        
      
        var config = {
            method: 'put',
            url: `${environment.API_URL}/cities?id=${id_city}&nameId=id_city&token=${userToken}`,
            
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