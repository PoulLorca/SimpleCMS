<template>
    <router-link :to="{ name: 'Home' }">Return</router-link>
    <h1> Images</h1>
    <nav>
    <router-link to="/newimage">New Image</router-link>
  </nav>

    <br>
    <br>

<div v-if="info">
        <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>URL</th>
                <th>Date Created</th>                
            </tr>
        <tr
        v-for="data, index in info"
        class="direccion">            
                <td>{{ index + 1 }}</td>
                <td>{{ data.url_image }}</td>
                <td>{{ data.date_created_image }}</td>                
                <td>
                    <a class="editButton" v-on:click="edit(data.id_image)">Edit</a> |
                    <a class="deleteButton" v-on:click="erase(data.id_image)">Delete</a>
                </td>
        </tr>      
    </table>
</div>   
    </template>
    
    <script>
    import ImagesService from '../../logic/ImagesService'
    import Swal from 'sweetalert2';
    
    export default {
        name:"ImagesView",
        data: () => ({
    info : null
  }),
  created(){        
    this.getData();
    
  },  
  methods: {
    async getData() {
      try {
        const response = await ImagesService.get();                
        const data=response.data

        this.info=data.results;

      } catch (error) {
        console.log(error)
      }
    }, 
    edit: async function(id){
      this.$router.push(`/editimage/${id}`);      
    } ,         
    erase: async function(id){        
      try {
        //Execute delete
        const response = await ImagesService.delete(id);                
        const data=response.data.status                

        if(data == 200){
          Swal.fire('Eliminado con éxito!')

          //Reload page
          //location.reload();
          this.$router.go('/images');    
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