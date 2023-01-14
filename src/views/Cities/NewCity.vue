<template>

    <h1>New City</h1>
    
        <nav>
            <router-link to="/cities">Return</router-link>
        </nav>    
    
        
        <form action class="form" @submit.prevent="newCity">
    
          <label class="form-label" for="#nameCity">Name:</label>
          <input
            v-model="nameCity"
            class="form-input"
            type="text"
            id="nameCity"
            placeholder="Name city"
            required
          >
    
        <br>
        <br>            

          <input class="form-submit" type="submit" value="Save">   
          <router-link class="lowGoback" to="/cities">Return</router-link>   
        </form>    
    
    </template>
    
    <script>    
    import CitiesService from "@/logic/CitiesService"
    import auth from "@/logic/auth"
    
    import Swal from 'sweetalert2'
    
    export default {
      data: () => ({    
        profile:null,
        nameCity: null,        
      }),
      async created(){        
        await this.getUser()
      },
      methods: {                
        newCity : async function(){
         try {        
          const response = await CitiesService.register(this.nameCity);            
          const data = response.data;
    
          if(data.status == 200){            
    
            Swal.fire('Guardado con éxito!')        
            this.$router.push("/cities");                  
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