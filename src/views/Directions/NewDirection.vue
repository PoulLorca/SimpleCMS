<template>

    <h1>New Direction</h1>
    
        <nav>
            <router-link to="/directions">Return</router-link>
        </nav>    
    
        
        <form action class="form" @submit.prevent="newAddress">
    
          <label class="form-label" for="#region">Region:</label>
          <select
            v-model="selregion"        
            name="region"        
          >
          <option  v-for="region in regions" :value="region.id_region">{{region.name_region}}</option>
    
        </select>
    
        <br>
    
          <label class="form-label" for="#city">City:</label>
          <select
            v-model="selcity"        
            name="city"        
          >
          <option  v-for="city in cities" :value="city.id_city">{{city.name_city}}</option>
    
        </select>
    
          <br>      
    
          <label class="form-label" for="#commune">Commune:</label>
          <select
            v-model="selcommune"        
            name="commune"        
          >
          <option  v-for="commune in communes" :value="commune.id_commune">{{commune.name_commune}}</option>
    
        </select>
    
          <br>      
    
          <label class="form-label" for="#detail">Detail:</label>
          <input
            v-model="detail"
            class="form-input"
            type="text"
            id="deatil"
            placeholder="Detalle"
            required
          >
    
          <br>
    
          <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
    
          <br>
    
          <input class="form-submit" type="submit" value="Guardar">   
          <router-link class="lowGoback" to="/directions">Return</router-link>   
        </form>    
    
    </template>
    
    <script>
    import RegionsService from "@/logic/RegionsService";
    import CitiesService from "@/logic/CitiesService";
    import CommunesService from "@/logic/CommunesService";
    import DirectionsService from "@/logic/DirectionsService";
    import auth from "@/logic/auth"
    
    import Swal from 'sweetalert2'
    
    export default {
      data: () => ({    
        profile:null,
        regions: null,
        cities: null,
        communes: null,
        selregion:"",
        selcity: "",
        selcommune:"",    
        detail:"",    
        error: false
      }),
      async created(){
        await this.getRegion()
        await this.getCity()
        await this.getCommune()      
        await this.getUser()
      },
      methods: {
        getRegion : async function() {
          try {
            const response = await RegionsService.get();                
            const data=response.data;        
    
            this.regions=data.results;
    
          } catch (error) {
            console.log(error)
          }
        },
        getCity : async function() {
          try {
            const response = await CitiesService.get();                
            const data=response.data;        
    
            this.cities=data.results;
    
          } catch (error) {
            console.log(error)
          }
        },
        getCommune : async function() {
          try {
            const response = await CommunesService.get();                
            const data=response.data;        
    
            this.communes=data.results;
    
          } catch (error) {
            console.log(error)
          }
        },
        newAddress : async function(){
         try {        
          const response = await DirectionsService.register(this.selregion, this.selcity, this.selcommune, this.detail);            
          const data = response.data;
    
          if(data.status == 200){            
    
              Swal.fire('Guardado con éxito!')        
              this.$router.push("/directions");        
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