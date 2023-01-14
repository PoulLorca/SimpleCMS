<template>

    <h1>New User</h1>
    
        <nav>
            <router-link to="/users">Return</router-link>
        </nav>    
    
        
        <form action class="form" @submit.prevent="newUser">
    
            <label class="form-label" for="#nameUser">Name user:</label>
          <input
            v-model="nameUser"
            class="form-input"
            type="text"
            id="nameUser"
            placeholder="Name user"
            required
          >
    
        <br>
        <br>
    
        <label class="form-label" for="#emailUser">Email User:</label>
          <input
            v-model="emailUser"
            class="form-input"
            type="email"
            id="emailUser"
            placeholder="Email user"
            required
          >
    
          <br>      
         <br>

         <label class="form-label" for="#passwordUser">Password User:</label>
          <input
            v-model="passwordUser"
            class="form-input"
            type="password"
            id="passwordUser"
            placeholder="Password user"
            required
          >
    
          <br>      
         <br>

          <label class="form-label" for="#direction">Direction:</label>
          <select
            v-model="selDirection"        
            name="direction"        
          >
          <option  v-for="direction in directions" :value="direction.id_direction">{{direction.detail_direction}}</option>
    
        </select>
    
          <br>      
          <br>
    
          <label class="form-label" for="#rol">Rol:</label>
          <select
            v-model="selRol"        
            name="rol"        
          >
          <option  v-for="rol in roles" :value="rol.id_rol">{{rol.name_rol}}</option>
    
        </select>
    
          <br>              
    
          <br>
    
          <input class="form-submit" type="submit" value="Guardar">   
          <router-link class="lowGoback" to="/users">Return</router-link>   
        </form>    
    
    </template>
    
    <script>
    import UsersService from "@/logic/UsersService";
    import DirectionsService from "@/logic/DirectionsService";
    import RolesService from "@/logic/RolesService";
    import auth from "@/logic/auth"
    
    import Swal from 'sweetalert2'
    
    export default {
      data: () => ({    
        profile:null,
        directions: null,
        roles: null,
        nameUser:"",
        emailUser:"",        
        passwordUser:"",
        selDirection:"",
        selRol:"",        
      }),
      async created(){
        await this.getDirection()     
        await this.getRoles()
        await this.getUser()
      },
      methods: {        
        getDirection : async function() {
          try {
            const response = await DirectionsService.get();                
            const data=response.data;        
                
            this.directions=data.results;            
    
          } catch (error) {
            console.log(error)
          }
        },
        getRoles : async function() {
          try {
            const response = await RolesService.get();                
            const data=response.data;        
                
            this.roles=data.results;            
    
          } catch (error) {
            console.log(error)
          }
        },
        newUser : async function(){
     try {        
      const response = await UsersService.register(this.nameUser,this.emailUser,this.passwordUser,this.selDirection,this.selRol);            
      const data = response.data;

      if(data.status == 200){        
          Swal.fire('Guardado con éxito!')        
          this.$router.push("/users");      
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