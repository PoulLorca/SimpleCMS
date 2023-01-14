<template>

    <h1>New State</h1>
    
        <nav>
            <router-link to="/states">Return</router-link>
        </nav>    
    
        
        <form action class="form" @submit.prevent="newState">
    
          <label class="form-label" for="#nameState">Name:</label>
          <input
            v-model="nameState"
            class="form-input"
            type="text"
            id="nameState"
            placeholder="Name state"
            required
          >
    
        <br>
        <br>            

          <input class="form-submit" type="submit" value="Save">   
          <router-link class="lowGoback" to="/states">Return</router-link>   
        </form>    
    
    </template>
    
    <script>    
    import StatesService from "@/logic/StatesService"
    import auth from "@/logic/auth"
    
    import Swal from 'sweetalert2'
    
    export default {
      data: () => ({    
        profile:null,
        nameState: null,        
      }),
      async created(){        
        await this.getUser()
      },
      methods: {                
        newState : async function(){
         try {        
          const response = await StatesService.register(this.nameState);            
          const data = response.data;
    
          if(data.status == 200){            
    
            Swal.fire('Guardado con éxito!')        
            this.$router.push("/states");                  
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