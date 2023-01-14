<template>

    <h1>New Image</h1>
    
        <nav>
            <router-link to="/images">Return</router-link>
        </nav>    
    
        
        <form action class="form" @submit.prevent="newImage">
    
          <label class="form-label" for="#urlimage">URL:</label>
          <input
            v-model="urlImage"
            class="form-input"
            type="text"
            id="urlimage"
            placeholder="URL image"
            required
          >
    
        <br>
        <br>            

          <input class="form-submit" type="submit" value="Save">   
          <router-link class="lowGoback" to="/images">Return</router-link>   
        </form>    

        <br>
        <br>

        <div class="preview" v-if="urlImage">
            <h3>Preview</h3>
            <img :src="urlImage" alt="ImagePreview" >
        </div>
    
    </template>
    
    <script>    
    import ImagesService from "@/logic/ImagesService"
    import auth from "@/logic/auth"
    
    import Swal from 'sweetalert2'
    
    export default {
      data: () => ({    
        profile:null,
        urlImage: null,        
      }),
      async created(){        
        await this.getUser()
      },
      methods: {                
        newImage : async function(){
         try {        
          const response = await ImagesService.register(this.urlImage);            
          const data = response.data;
    
          if(data.status == 200){            
    
            Swal.fire('Guardado con éxito!')        
            this.$router.push("/images");                  
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