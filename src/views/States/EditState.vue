<template>    
    <h1>Edit State</h1>

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

import Swal from 'sweetalert2'

export default {
data: () => ({      
  nameState: null,        
}),
async created(){
        await  this.getState();        
    },
    methods:{
        getState: async function(){
            try{
                let id = this.$route.params.id;
                const response = await StatesService.getState(id);
                const data  = response.data.results[0];

                this.nameState = data.name_state;                
                
            }catch(error){
                console.log(error);
            }
        },        
    newState : async function(){
     try {        
        let id = this.$route.params.id;
      const response = await StatesService.update(id,this.nameState);            
      const data = response.data.status;

      if(data == 200){
        Swal.fire('Guardado con éxito!')

        this.$router.push("/states");
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