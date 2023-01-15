<template>    
    <h1>Edit Commune</h1>

    <nav>
        <router-link to="/communes">Return</router-link>
    </nav>    

    
    <form action class="form" @submit.prevent="newImage">
    
    <label class="form-label" for="#urlimage">URL:</label>
    <input
      v-model="urlImage"
      class="form-input"
      type="text"
      id="urlimage"
      placeholder="URL image"
      required
    >

  <br>
  <br>            

    <input class="form-submit" type="submit" value="Save">   
    <router-link class="lowGoback" to="/images">Return</router-link>   
  </form>    

  <br>
  <br>

  <div class="preview" v-if="urlImage">
      <h3>Preview</h3>
      <img :src="urlImage" alt="ImagePreview" >
  </div>

</template>

<script>

import ImagesService from '@/logic/ImagesService';
import Swal from 'sweetalert2';

export default {
    data: () => ({        
        urlImage: null,        
    }),
    async created(){
        await  this.getImage();        
    },
    methods:{
        getImage: async function(){
            try{
                let id = this.$route.params.id;
                const response = await ImagesService.getImage(id);
                const data  = response.data.results[0];

                this.urlImage = data.url_image;                
                
            }catch(error){
                console.log(error);
            }
        },        
    newImage : async function(){
     try {        
        let id = this.$route.params.id;
      const response = await ImagesService.update(id,this.urlImage);            
      const data = response.data.status;

      if(data == 200){
        Swal.fire('Guardado con éxito!')

        this.$router.push("/images");
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