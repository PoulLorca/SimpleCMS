<template>

    <h1>New City</h1>
    
        <nav>
            <router-link to="/communes">Return</router-link>
        </nav>    
    
        
        <form action class="form" @submit.prevent="newCommune">
    
          <label class="form-label" for="#nameCity">Name:</label>
          <input
            v-model="nameCommune"
            class="form-input"
            type="text"
            id="nameCommune"
            placeholder="Name commune"
            required
          >
    
        <br>
        <br>            

          <input class="form-submit" type="submit" value="Save">   
          <router-link class="lowGoback" to="/communes">Return</router-link>   
        </form>    
    
    </template>
    
    <script>    
    import CommunesService from "@/logic/CommunesService"
    import auth from "@/logic/auth"
    
    import Swal from 'sweetalert2'
    
    export default {
      data: () => ({    
        profile:null,
        nameCommune: null,        
      }),
      async created(){        
        await this.getUser()
      },
      methods: {                
        newCommune : async function(){
         try {        
          const response = await CommunesService.register(this.nameCommune);            
          const data = response.data;
    
          if(data.status == 200){            
    
            Swal.fire('Guardado con éxito!')        
            this.$router.push("/communes");                  
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