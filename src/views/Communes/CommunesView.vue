<template>
    <router-link :to="{ name: 'Home' }">Return</router-link>
    <h1> Communes</h1>
    <nav>
    <router-link to="/newcommune">New Commune</router-link>
  </nav>

    <br>
    <br>

<div v-if="info">
        <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Date Created</th>                
                <th>Acciones</th>
            </tr>
        <tr
        v-for="data, index in info"
        class="direccion">            
                <td>{{ index + 1 }}</td>
                <td>{{ data.name_commune }}</td>
                <td>{{ data.date_created_commune }}</td>                
                <td>
                    <a class="editButton" v-on:click="edit(data.id_commune)">Edit</a> |
                    <a class="deleteButton" v-on:click="erase(data.id_commune)">Delete</a>
                </td>
        </tr>      
    </table>
</div>   
    </template>
    
    <script>
 import CommunesService from '../../logic/CommunesService'
 import Swal from 'sweetalert2';

    export default {
        name:"CommunesView",
        data: () => ({
    info : null
  }),
  created(){        
    this.getData();
    
  },  
  methods: {
    async getData() {
      try {
        const response = await CommunesService.get();                
        const data=response.data

        this.info=data.results;

      } catch (error) {
        console.log(error)
      }
    }, 
    edit: async function(id){
      this.$router.push(`/editcommune/${id}`);      
    } ,         
    erase: async function(id){        
      try {
        //Execute delete
        const response = await CommunesService.delete(id);                
        const data=response.data.status                

        if(data == 200){
          Swal.fire('Eliminado con éxito!')

          //Reload page
          //location.reload();
          this.$router.go('/communes');    
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