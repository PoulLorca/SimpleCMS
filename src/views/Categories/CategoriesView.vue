<template>
    <router-link :to="{ name: 'Home' }">Return</router-link>
    <h1> Categories</h1>
<nav>
    <router-link to="/newcategory">New Category</router-link>
  </nav>

    <br>
    <br>

<div v-if="info">
        <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Type Image</th>
                <th>Date Created</th>
                <th>Acciones</th>
            </tr>
        <tr
        v-for="data, index in info"
        class="direccion">            
                <td>{{ index + 1 }}</td>
                <td>{{ data.name_category }}</td>
                <td>{{ data.typeimg_category }}</td>
                <td>{{ data.date_created_category }}</td>                    
                <td>
                    <a class="editButton" v-on:click="edit(data.id_category)">Edit</a> |
                    <a class="deleteButton" v-on:click="erase(data.id_category)">Delete</a>
                </td>
        </tr>      
    </table>
</div>   
    </template>
    
    <script>
    import CategoriesService from '../../logic/CategoriesService'
    import Swal from 'sweetalert2';
    
    export default {
        name:"CategoriesView",
        data: () => ({
    info : null
  }),
  created(){        
    this.getData();
    
  },  
  methods: {
    async getData() {
      try {
        const response = await CategoriesService.get();                
        const data=response.data

        this.info=data.results;

      } catch (error) {
        console.log(error)
      }
    }, 
    edit: async function(id){
      this.$router.push(`/editcategory/${id}`);      
    } ,         
    erase: async function(id){        
      try {
        //Execute delete
        const response = await CategoriesService.delete(id);                
        const data=response.data.status                

        if(data == 200){
          Swal.fire('Eliminado con éxito!')

          //Reload page
          //location.reload();
          this.$router.go('/cities');    
        }else{
          Swal.fire('Error al borrar!')
        }        
      } catch (error) {
        console.log(error)
      }
    }
  }  
}
    </script>
    
    <style lang="css" scoped>
    table, th, td {
  border:1px solid black;
}

.editButton:hover{
    cursor:pointer;
} 

.deleteButton:hover{
    cursor:pointer;
} 
    </style>