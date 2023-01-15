<template>    
    <h1>Edit City</h1>

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

import CitiesService from '@/logic/CitiesService';
import Swal from 'sweetalert2';

export default {
    data: () => ({        
        nameCity: null,        
    }),
    async created(){
        await  this.getCity();        
    },
    methods:{
        getCity: async function(){
            try{
                let id = this.$route.params.id;
                const response = await CitiesService.getCity(id);
                const data  = response.data.results[0];

                this.nameCity = data.name_city;                
                
            }catch(error){
                console.log(error);
            }
        },        
    newCity : async function(){
     try {        
        let id = this.$route.params.id;
      const response = await CitiesService.update(id,this.nameCity);            
      const data = response.data.status;

      if(data == 200){
        Swal.fire('Guardado con éxito!')

        this.$router.push("/cities");
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