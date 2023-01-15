<template>    
    <h1>Edit Rol</h1>

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

import Swal from 'sweetalert2'

export default {
data: () => ({      
  nameRole: null,        
}),
async created(){
        await  this.getRole();        
    },
    methods:{
        getRole: async function(){
            try{
                let id = this.$route.params.id;
                const response = await RolesService.getRol(id);
                const data  = response.data.results[0];

                this.nameRole = data.name_rol;                
                
            }catch(error){
                console.log(error);
            }
        },        
    newRole : async function(){
     try {        
        let id = this.$route.params.id;
      const response = await RolesService.update(id,this.nameRole);            
      const data = response.data.status;

      if(data == 200){
        Swal.fire('Guardado con éxito!')

        this.$router.push("/roles");
      }else{
        Swal.fire('Error al guardar!')
      }      

      } catch (error) {
        console.log(error);
      }
    }
    }
}
</script>

<style lang="css" scoped>
</style>