<template>

    <h1>New Shop</h1>
    
        <nav>
            <router-link to="/shops">Return</router-link>
        </nav>    
    
        
        <form action class="form" @submit.prevent="newShop">
    
            <label class="form-label" for="#userShop">userShop:</label>
          <select
            v-model="seluserShop"        
            name="userShop"        
          >
          <option  v-for="user in users" :value="user.id_user">{{user.email_user}}</option>
    
        </select>        
    
        <br>
        <br>
    
        <label class="form-label" for="#productShop">productShop:</label>
          <select
            v-model="selproductShop"        
            name="productShop"        
          >
          <option  v-for="product in products" :value="product.id_product">{{product.title_product}}</option>
    
        </select>        
    
          <br>      
         <br>

         <label class="form-label" for="#ammountShop">Ammount Shop:</label>
          <input
            v-model="ammountShop"
            class="form-input"
            type="number"
            id="ammountShop"
            placeholder="ammount Shop"
            required
          >
    
          <br>      
         <br>

          <label class="form-label" for="#directionShop">Direction Shop:</label>
          <select
            v-model="seldirectionShop"        
            name="direction Shop"        
          >
          <option  v-for="direction in directions" :value="direction.id_direction">{{direction.detail_direction}}</option>
    
        </select>
    
          <br>      
          <br>
    
          <label class="form-label" for="#stateShop">State Shop:</label>
          <select
            v-model="selstateShop"        
            name="state Shop"        
          >
          <option  v-for="state in states" :value="state.id_state">{{state.name_state}}</option>
    
        </select>        
    
          <br>                  
          <br>
    
          <input class="form-submit" type="submit" value="Guardar">   
          <router-link class="lowGoback" to="/shops">Return</router-link>   
        </form>    
    
    </template>
    
    <script>
    import UsersService from "@/logic/UsersService";
    import ProductsService from "@/logic/ProductsService";
    import DirectionsService from "@/logic/DirectionsService";
    import StatesService from "@/logic/StatesService";
    import ShopsService from "@/logic/ShopsService";
    import auth from "@/logic/auth"
    
    import Swal from 'sweetalert2'
    
    export default {
      data: () => ({    
        profile:null,
        users:null,
        products: null,
        directions: null,
        states:null,
        seluserShop:"",
        selproductShop:"",
        ammountShop:"",        
        seldirectionShop:"",
        selstateShop:""          
      }),
      async created(){
        await this.getUsers()     
        await this.getProducts()
        await this.getDirections()
        await this.getStates()
        await this.getUser()
      },
      methods: {        
        getUsers : async function() {
          try {
            const response = await UsersService.get();                
            const data=response.data;        
                
            this.users=data.results;            
    
          } catch (error) {
            console.log(error)
          }
        },
        getProducts : async function() {
          try {
            const response = await ProductsService.get();                
            const data=response.data;        
                
            this.products=data.results;            
    
          } catch (error) {
            console.log(error)
          }
        },
        getDirections : async function() {
          try {
            const response = await DirectionsService.get();                
            const data=response.data;        
                
            this.directions=data.results;            
    
          } catch (error) {
            console.log(error)
          }
        },
        getStates : async function() {
          try {
            const response = await StatesService.get();                
            const data=response.data;        
                
            this.states=data.results;            
    
          } catch (error) {
            console.log(error)
          }
        },
        newShop : async function(){
     try {        
      const response = await ShopsService.register(this.seluserShop,this.selproductShop,this.ammountShop,this.seldirectionShop,this.selstateShop);            
      const data = response.data;

      if(data.status == 200){        
          Swal.fire('Guardado con éxito!')        
          this.$router.push("/shops");      
      }else{
        Swal.fire('Error al guardar!')
      }      

      } catch (error) {
        console.log(error);
      }
    },
        getUser: async function(){
          try{  
            const response = await JSON.parse(auth.getUserLogged());                                        
            this.profile = response;                          
          }catch(error){
            console.log(error);
          }
        }
      }
    }
    </script>
    
    <style lang="css" scoped>
    </style>