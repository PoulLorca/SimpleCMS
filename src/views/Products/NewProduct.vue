<template>

    <h1>New Product</h1>
    
        <nav>
            <router-link to="/products">Return</router-link>
        </nav>    
    
        
        <form action class="form" @submit.prevent="newProduct">
    
            <label class="form-label" for="#titleProduct">Title product:</label>
          <input
            v-model="titleProduct"
            class="form-input"
            type="text"
            id="titleProduct"
            placeholder="title Product"
            required
          >
    
        <br>
        <br>
    
        <label class="form-label" for="#priceProduc">Price product:</label>
          <input
            v-model="priceProduct"
            class="form-input"
            type="number"
            id="priceProduct"
            placeholder="$"
            required
          >
    
          <br>      
         <br>

         <label class="form-label" for="#descriptionProduc">Description Product:</label>
          <input
            v-model="descriptionProduct"
            class="form-input"
            type="text"
            id="descriptionProduct"
            placeholder="description Product"
            required
          >
    
          <br>      
         <br>

          <label class="form-label" for="#category">Category:</label>
          <select
            v-model="selCategory"        
            name="category"        
          >
          <option  v-for="category in categories" :value="category.id_category">{{category.name_category}}</option>
    
        </select>
    
          <br>      
          <br>
    
          <label class="form-label" for="#image">Image:</label>
          <select
            v-model="selImage"        
            name="image"        
          >
          <option  v-for="image in images" :value="image.id_image">{{image.url_image}}</option>
    
        </select>        
    
          <br>                  
          <br>
    
          <input class="form-submit" type="submit" value="Guardar">   
          <router-link class="lowGoback" to="/products">Return</router-link>   
        </form>    
    
    </template>
    
    <script>
    import ProductsService from "@/logic/ProductsService";
    import CategoriesService from "@/logic/CategoriesService";
    import ImagesService from "@/logic/ImagesService";
    import auth from "@/logic/auth"
    
    import Swal from 'sweetalert2'
    
    export default {
      data: () => ({    
        profile:null,
        categories: null,
        images: null,
        titleProduct:"",
        priceProduct:"",        
        descriptionProduct:"",        
        selCategory:"",
        selImage:""           
      }),
      async created(){
        await this.getCategory()     
        await this.getImages()
        await this.getUser()
      },
      methods: {        
        getCategory : async function() {
          try {
            const response = await CategoriesService.get();                
            const data=response.data;        
                
            this.categories=data.results;            
    
          } catch (error) {
            console.log(error)
          }
        },
        getImages : async function() {
          try {
            const response = await ImagesService.get();                
            const data=response.data;        
                
            this.images=data.results;            
    
          } catch (error) {
            console.log(error)
          }
        },
        newProduct : async function(){
     try {        
      const response = await ProductsService.register(this.titleProduct,this.priceProduct,this.descriptionProduct,this.selCategory,this.selImage);            
      const data = response.data;

      if(data.status == 200){        
          Swal.fire('Guardado con éxito!')        
          this.$router.push("/products");      
      }else{
        Swal.fire('Error al guardar!')
      }      

      } catch (error) {
        console.log(error);
      }
    },
        getUser: async function(){
          try{  
            const response = await JSON.parse(auth.getUserLogged());                                        
            this.profile = response;                          
          }catch(error){
            console.log(error);
          }
        }
      }
    }
    </script>
    
    <style lang="css" scoped>
    </style>