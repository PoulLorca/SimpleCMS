<template>
    <router-link :to="{ name: 'Home' }">Return</router-link>
<h1> Users </h1>
<small>Only with direction associated</small>
<nav>
    <router-link to="/newaddress">New User</router-link>
  </nav>

    <br>
    <br>

<div v-if="info">
        <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Direction</th>
                <th>Rol</th>                
                <th>Date Created</th>
            </tr>
        <tr
        v-for="data, index in info"
        class="direccion">            
                <td>{{ index + 1 }}</td>
                <td>{{ data.name_user }}</td>
                <td>{{ data.email_user }}</td>
                <td>{{ data.detail_direction }}</td>    
                <td>{{ data.name_rol }}</td>
                <td>{{ data.date_created_user }}</td>
                <td>
                    <a class="editButton" v-on:click="edit(direccion.id_direction)">Edit</a> |
                    <a class="deleteButton" v-on:click="erase(direccion.id_direction)">Delete</a>
                </td>
        </tr>      
    </table>
</div>   
</template>

<script>
import UsersService from '../../logic/UsersService'

export default {
    name:"UsersView",
    data: () => ({
    info : null
  }),
  created(){        
    this.getData();
    
  },  
  methods: {
    async getData() {
      try {
        const response = await UsersService.get();                
        const data=response.data

        this.info=data.results;

      } catch (error) {
        console.log(error)
      }
    }, 
    edit: async function(id){
      this.$router.push(`/editaddress/${id}`);      
    } ,         
    erase: async function(id){        
      try {
        //Execute delete
        const response = await addresssrvice.delete(id);                
        const data=response.data.status                

        if(data == 200){
          Swal.fire('Eliminado con éxito!')

          //Reload page
          //location.reload();
          this.$router.push('/address');    
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