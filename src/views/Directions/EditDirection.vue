<template>    
    <h1>Edit Direction</h1>

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
import DirectionsService from '@/logic/DirectionsService';
import RegionsService from '@/logic/RegionsService';
import CitiesService from '@/logic/CitiesService';
import CommunesService from '@/logic/CommunesService';
import Swal from 'sweetalert2';

export default {
    data: () => ({
        regions: null,
        cities: null,
        communes: null,
        selregion:"",
        selcity: "",
        selcommune:"",    
        defregion:"",
        defcity: "",
        defcommune:"",    
        detail:"", 
        error: false,    
    }),
    async created(){
        await  this.getDirection();
        await this.getRegion()
        await this.getCity()
        await this.getCommune()    
    },
    methods:{
        getDirection: async function(){
            try{
                let id = this.$route.params.id;
                const response = await DirectionsService.getDirection(id);
                const data  = response.data.results[0];

                this.defregion = data.id_region_direction;
                this.defcity = data.id_city_direction;
                this.defcommune = data.id_commune_direction;
                this.detail = data.detail_direction;
                
            }catch(error){
                console.log(error);
            }
        },
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
        let id = this.$route.params.id;
      const response = await DirectionsService.update(id,this.selregion, this.selcity, this.selcommune, this.detail);            
      const data = response.data.status;

      if(data == 200){
        Swal.fire('Guardado con éxito!')

        this.$router.push("/directions");
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