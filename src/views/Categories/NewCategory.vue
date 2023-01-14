<template>

    <h1>New Category</h1>
    
        <nav>
            <router-link to="/categories">Return</router-link>
        </nav>    
    
        
        <form action class="form" @submit.prevent="newCategory">
    
          <label class="form-label" for="#nameCateory">Name:</label>
          <input
            v-model="nameCategory"
            class="form-input"
            type="text"
            id="nameCategory"
            placeholder="Name category"
            required
          >
    
        <br>
        <br>
    
        <label class="form-label" for="#typeimg">Type Image:</label>
          <input
            v-model="typeimg"
            class="form-input"
            type="text"
            id="typeimg"
            placeholder="Type Image"
            required
          >
    
          <br>                                                              
          <br>

          <input class="form-submit" type="submit" value="Save">   
          <router-link class="lowGoback" to="/categories">Return</router-link>   
        </form>    
    
    </template>
    
    <script>    
    import CategoriesService from "@/logic/CategoriesService"    
    import auth from "@/logic/auth"
    
    import Swal from 'sweetalert2'
    
    export default {
      data: () => ({    
        profile:null,
        nameCategory: null,
        typeimg: null
      }),
      async created(){        
        await this.getUser()
      },
      methods: {                
        newCategory : async function(){
         try {        
          const response = await CategoriesService.register(this.nameCategory, this.typeimg);            
          const data = response.data;
    
          if(data.status == 200){            
    
            Swal.fire('Guardado con éxito!')        
            this.$router.push("/categories");                  
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