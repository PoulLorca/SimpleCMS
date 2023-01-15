<template>    
    <h1>Edit Commune</h1>

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

import CommunesService from '@/logic/CommunesService';
import Swal from 'sweetalert2';

export default {
    data: () => ({        
        nameCommune: null,                
    }),
    async created(){
        await  this.getCommune();        
    },
    methods:{
        getCommune: async function(){
            try{
                let id = this.$route.params.id;
                const response = await CommunesService.getCommune(id);
                const data  = response.data.results[0];

                this.nameCommune = data.name_commune;                
                
            }catch(error){
                console.log(error);
            }
        },        
    newCommune : async function(){
     try {        
        let id = this.$route.params.id;
      const response = await CommunesService.update(id,this.nameCommune);            
      const data = response.data.status;

      if(data == 200){
        Swal.fire('Guardado con éxito!')

        this.$router.push("/communes");
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