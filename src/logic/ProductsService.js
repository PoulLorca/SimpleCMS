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
getProduct(id){        
  var config = {
    method: 'get',
    url: `${environment.API_URL}/products?select=*&linkTo=id_product&equalTo=${id}`,
    headers: {     
      'apikey': `${environment.API_KEY}`
    }
  };
  
  return axios(config)
  
      },
      update(id_product,title_product,price_product,description_product,id_category_product,id_image_product) {

        let user = JSON.parse(auth.getUserLogged());  
        let userToken = user.token_user                
      
      
        const data = qs.stringify(
            { title_product: `${title_product}`,                  
            price_product: `${price_product}`,
            description_product: `${description_product}`,
            id_category_product: `${id_category_product}`,
            id_image_product: `${id_image_product}`,
         });        
      
        var config = {
            method: 'put',
            url: `${environment.API_URL}/products?id=${id_product}&nameId=id_product&token=${userToken}`,
            
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