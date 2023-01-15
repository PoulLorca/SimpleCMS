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
  url: `${environment.API_URL}/regions`,
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
  url: `${environment.API_URL}/regions?id=${id}&nameId=id_region&token=${tokenUser}`,
  headers: {     
    'apikey': `${environment.API_KEY}`
  },
  data : data
};

//Execute query and return response
return axios(config)

},
register(name_region) {

  let user = JSON.parse(auth.getUserLogged());  
  let userToken = user.token_user  

  let date_created_region = moment(new Date()).format("YYYY-MM-DD");


  const data = qs.stringify(
      { name_region: `${name_region}`,            
      date_created_region: `${date_created_region}`
   });        

  var config = {
      method: 'post',
      url: `${environment.API_URL}/regions?token=${userToken}&table=users&suffix=user&except`,
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
getRegion(id){        
  var config = {
    method: 'get',
    url: `${environment.API_URL}/regions?select=*&linkTo=id_region&equalTo=${id}`,
    headers: {     
      'apikey': `${environment.API_KEY}`
    }
  };
  
  return axios(config)
  
      },
      update(id_region,name_region) {

        let user = JSON.parse(auth.getUserLogged());  
        let userToken = user.token_user                
      
      
        const data = qs.stringify(
            { name_region: `${name_region}`,                  
         });        
      
        var config = {
            method: 'put',
            url: `${environment.API_URL}/regions?id=${id_region}&nameId=id_region&token=${userToken}`,
            
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