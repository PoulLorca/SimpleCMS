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
  url: `${environment.API_URL}/relations?select=*&rel=products,categories,images&type=product,category,image`,
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
  url: `${environment.API_URL}/products?id=${id}&nameId=id_product&token=${tokenUser}`,
  headers: {     
    'apikey': `${environment.API_KEY}`
  },
  data : data
};

//Execute query and return response
return axios(config)

},
register(title_product,price_product,description_product,id_category_product,id_image_product) {

  let user = JSON.parse(auth.getUserLogged());  
  let userToken = user.token_user  

  let date_created_product = moment(new Date()).format("YYYY-MM-DD");


  const data = qs.stringify(
      { title_product: `${title_product}`,      
      price_product: `${price_product}`,
      description_product: `${description_product}`,
      id_category_product: `${id_category_product}`,
      id_image_product: `${id_image_product}`,
      date_created_product: `${date_created_product}`
   });                   

  var config = {
      method: 'post',
      url: `${environment.API_URL}/products?token=${userToken}&table=users&suffix=user&except`,
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
getDirection(id){        
  var config = {
    method: 'get',
    url: `${environment.API_URL}/directions?select=*&linkTo=id_direction&equalTo=${id}`,
    headers: {     
      'apikey': `${environment.API_KEY}`
    }
  };
  
  return axios(config)
  
      },
      update(id_direction,id_region_direction, id_city_direction, id_commune_direction, detail_direction) {

        let user = JSON.parse(auth.getUserLogged());  
        let userToken = user.token_user                
      
      
        const data = qs.stringify(
            { id_region_direction: `${id_region_direction}`,      
            id_city_direction: `${id_city_direction}`,
            id_commune_direction: `${id_commune_direction}`,
            detail_direction: `${detail_direction}`,            
         });        
      
        var config = {
            method: 'put',
            url: `${environment.API_URL}/directions?id=${id_direction}&nameId=id_direction&token=${userToken}`,
            
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