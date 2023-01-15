<template>    
    <h1>Edit Region</h1>

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

import Swal from 'sweetalert2'

export default {
data: () => ({      
  nameRegion: null,        
}),
async created(){
        await  this.getRegion();        
    },
    methods:{
        getRegion: async function(){
            try{
                let id = this.$route.params.id;
                const response = await RegionsService.getRegion(id);
                const data  = response.data.results[0];

                this.nameRegion = data.name_region;                
                
            }catch(error){
                console.log(error);
            }
        },        
    newRegion : async function(){
     try {        
        let id = this.$route.params.id;
      const response = await RegionsService.update(id,this.nameRegion);            
      const data = response.data.status;

      if(data == 200){
        Swal.fire('Guardado con éxito!')

        this.$router.push("/regions");
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