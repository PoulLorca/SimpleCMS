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
  url: `${environment.API_URL}/categories`,
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
  url: `${environment.API_URL}/categories?id=${id}&nameId=id_category&token=${tokenUser}`,
  headers: {     
    'apikey': `${environment.API_KEY}`
  },
  data : data
};

console.log(config.url);

//Execute query and return response
return axios(config)

},
register(name_category, typeimg_category) {

  let user = JSON.parse(auth.getUserLogged());  
  let userToken = user.token_user  

  let date_created_category = moment(new Date()).format("YYYY-MM-DD");


  const data = qs.stringify(
      { name_category: `${name_category}`,      
      typeimg_category: `${typeimg_category}`,      
      date_created_category: `${date_created_category}`
   });        

  var config = {
      method: 'post',
      url: `${environment.API_URL}/categories?token=${userToken}&table=users&suffix=user&except`,
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
getCategory(id){        
  var config = {
    method: 'get',
    url: `${environment.API_URL}/categories?select=*&linkTo=id_category&equalTo=${id}`,
    headers: {     
      'apikey': `${environment.API_KEY}`
    }
  };
  
  return axios(config)
  
      },
      update(id_category,name_category,typeimg_category) {

        let user = JSON.parse(auth.getUserLogged());  
        let userToken = user.token_user                
      
      
        const data = qs.stringify(
            { name_category: `${name_category}`,      
            typeimg_category: `${typeimg_category}`,            
         });        
      
        var config = {
            method: 'put',
            url: `${environment.API_URL}/categories?id=${id_category}&nameId=id_category&token=${userToken}`,
            
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