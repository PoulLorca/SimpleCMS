<template>
    <router-link :to="{ name: 'Home' }">Return</router-link>
    <h1> Shops</h1>
    <nav>
    <router-link to="/newshop">New Shop</router-link>
  </nav>

    <br>
    <br>

<div v-if="info">
        <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Email User</th>
                <th>Product</th>
                <th>Ammount</th>
                <th>Direction</th>
                <th>State</th>
                <th>Date Created</th>
            </tr>
        <tr
        v-for="data, index in info"
        class="direccion">            
                <td>{{ index + 1 }}</td>
                <td>{{ data.email_user }}</td>
                <td>{{ data.title_product }}</td>
                <td>{{ data.ammount_shop }}</td>    
                <td>{{ data.detail_direction }}</td>
                <td>{{ data.name_state }}</td>
                <td>{{ data.date_created_shop }}</td>
                <td>
                    <a class="editButton" v-on:click="edit(data.id_shop)">Edit</a> |
                    <a class="deleteButton" v-on:click="erase(data.id_shop)">Delete</a>
                </td>
        </tr>      
    </table>
</div>   
    </template>
    
    <script>
    import ShopsService from '../../logic/ShopsService'
    import Swal from 'sweetalert2';
    
    export default {
        name:"ShopsView",
        data: () => ({
    info : null
  }),
  created(){        
    this.getData();
    
  },  
  methods: {
    async getData() {
      try {
        const response = await ShopsService.get();                
        const data=response.data

        this.info=data.results;

      } catch (error) {
        console.log(error)
      }
    }, 
    edit: async function(id){
      this.$router.push(`/editshop/${id}`);      
    } ,         
    erase: async function(id){        
      try {
        //Execute delete
        const response = await ShopsService.delete(id);                
        const data=response.data.status                

        if(data == 200){
          Swal.fire('Eliminado con ??xito!')

          //Reload page
          //location.reload();
          this.$router.go('/shops');    
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