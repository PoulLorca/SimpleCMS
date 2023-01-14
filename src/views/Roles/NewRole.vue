<template>

    <h1>New Role</h1>
    
        <nav>
            <router-link to="/roles">Return</router-link>
        </nav>    
    
        
        <form action class="form" @submit.prevent="newRole">
    
          <label class="form-label" for="#nameRole">Name:</label>
          <input
            v-model="nameRole"
            class="form-input"
            type="text"
            id="nameRole"
            placeholder="Name role"
            required
          >
    
        <br>
        <br>            

          <input class="form-submit" type="submit" value="Save">   
          <router-link class="lowGoback" to="/roles">Return</router-link>   
        </form>    
    
    </template>
    
    <script>    
    import RolesService from "@/logic/RolesService"
    import auth from "@/logic/auth"
    
    import Swal from 'sweetalert2'
    
    export default {
      data: () => ({    
        profile:null,
        nameRole: null,        
      }),
      async created(){        
        await this.getUser()
      },
      methods: {                
        newRole : async function(){
         try {        
          const response = await RolesService.register(this.nameRole);            
          const data = response.data;
    
          if(data.status == 200){            
    
            Swal.fire('Guardado con éxito!')        
            this.$router.push("/roles");                  
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