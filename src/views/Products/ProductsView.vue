<template>
    <router-link :to="{ name: 'Home' }">Return</router-link>
    <h1> Products</h1>
    <nav>
    <router-link to="/newproduct">New Product</router-link>
  </nav>

    <br>
    <br>

<div v-if="info">
        <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>URL image</th>
                <th>Date Created</th>                
            </tr>
        <tr
        v-for="data, index in info"
        class="direccion">            
                <td>{{ index + 1 }}</td>
                <td>{{ data.title_product }}</td>
                <td>{{ data.price_product }}</td>
                <td>{{ data.description_product }}</td>    
                <td>{{ data.name_category }}</td>  
                <td>{{ data.url_image }}</td>
                <td>{{ data.date_created_product }}</td>
                <td>
                    <a class="editButton" v-on:click="edit(data.id_product)">Edit</a> |
                    <a class="deleteButton" v-on:click="erase(data.id_product)">Delete</a>
                </td>
        </tr>      
    </table>
</div>   
    </template>
    
    <script>
    import ProductsService from '../../logic/ProductsService'
    import Swal from 'sweetalert2';
    
    export default {
        name:"ProductsView",
        data: () => ({
    info : null
  }),
  created(){        
    this.getData();
    
  },  
  methods: {
    async getData() {
      try {
        const response = await ProductsService.get();                
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
        const response = await ProductsService.delete(id);                
        const data=response.data.status                

        if(data == 200){
          Swal.fire('Eliminado con éxito!')

          //Reload page
          //location.reload();
          this.$router.go('/products');    
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