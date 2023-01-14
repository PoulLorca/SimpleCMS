<template>

    <h1>New Region</h1>
    
        <nav>
            <router-link to="/regions">Return</router-link>
        </nav>    
    
        
        <form action class="form" @submit.prevent="newRegion">
    
          <label class="form-label" for="#nameRegion">Name:</label>
          <input
            v-model="nameRegion"
            class="form-input"
            type="text"
            id="nameRegion"
            placeholder="Name region"
            required
          >
    
        <br>
        <br>            

          <input class="form-submit" type="submit" value="Save">   
          <router-link class="lowGoback" to="/regions">Return</router-link>   
        </form>    
    
    </template>
    
    <script>    
    import RegionsService from "@/logic/RegionsService"
    import auth from "@/logic/auth"
    
    import Swal from 'sweetalert2'
    
    export default {
      data: () => ({    
        profile:null,
        nameRegion: null,        
      }),
      async created(){        
        await this.getUser()
      },
      methods: {                
        newRegion : async function(){
         try {        
          const response = await RegionsService.register(this.nameRegion);            
          const data = response.data;
    
          if(data.status == 200){            
    
            Swal.fire('Guardado con éxito!')        
            this.$router.push("/regions");                  
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