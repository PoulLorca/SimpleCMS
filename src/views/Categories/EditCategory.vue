<template>    
    <h1>Edit Category</h1>

    <nav>
        <router-link to="/categories">Return</router-link>
    </nav>    

    
    <form action class="form" @submit.prevent="newCategory">
    
    <label class="form-label" for="#nameCateory">Name:</label>
    <input
      v-model="nameCategory"
      class="form-input"
      type="text"
      id="nameCategory"
      placeholder="Name category"
      required
    >

  <br>
  <br>

  <label class="form-label" for="#typeimg">Type Image:</label>
    <input
      v-model="typeimg"
      class="form-input"
      type="text"
      id="typeimg"
      placeholder="Type Image"
      required
    >

    <br>                                                              
    <br>

    <input class="form-submit" type="submit" value="Save">   
    <router-link class="lowGoback" to="/categories">Return</router-link>   
  </form>    

</template>

<script>

import CategoriesService from '@/logic/CategoriesService';
import Swal from 'sweetalert2';

export default {
    data: () => ({
        nameCategory: null,
        typeimg: null
    }),
    async created(){
        await  this.getCategory();        
    },
    methods:{
        getCategory: async function(){
            try{
                let id = this.$route.params.id;
                const response = await CategoriesService.getCategory(id);
                const data  = response.data.results[0];

                this.nameCategory = data.name_category;
                this.typeimg = data.typeimg_category
                
            }catch(error){
                console.log(error);
            }
        },        
    newCategory : async function(){
     try {        
        let id = this.$route.params.id;
      const response = await CategoriesService.update(id,this.nameCategory, this.typeimg);            
      const data = response.data.status;

      if(data == 200){
        Swal.fire('Guardado con éxito!')

        this.$router.push("/categories");
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