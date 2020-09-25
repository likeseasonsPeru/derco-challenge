<template>
  <b-container>
      <b-row class="buttonActions">
            <nuxt-link to="/">
                <font-awesome-icon 
                    icon="chevron-left"
                    :style="{width : '12px', height: '12px'}"
                /> Volver al <span>inicio</span>
            </nuxt-link>
            <button @click="showModal">
                <font-awesome-icon 
                    icon="filter"
                    :style="{width : '12px', height: '12px'}"
                /> Filtrar <span>resultados</span>
            </button>
      </b-row>
      <b-row class="rowModelos">
          <div v-if="!(pages !== null)">
              <img class="loading-gif" src="~/assets/images/gifLoading.gif" alt="Loading Autos - Derco Perú">
          </div>
          <AutoItem  :car="auto" v-for="(auto,index) in autosFilter" :key="index"/>
          <b-col sm="12">
              <b-pagination
                    v-if="pages !== null"
                    v-model="currentPage"
                    :total-rows="autos.length"
                    :per-page="perPage"
                    :prefetch="true"
                    class="paginationStyle"
                ></b-pagination>
          </b-col>
      </b-row>
      <b-modal 
        ref="modal-filtros" 
        hide-footer
        class="filtroModal"
        title="Filtro de búsqueda">
        <h4>
            Rango de precios
        </h4>
        <b-col sm="12" class="inputContainer">
            <b-row>
                <div class="col-12 col-md-6">
                <label for="preciomin">Desde $</label>
                <input 
                    :v-model="preciomin" 
                    type="text"
                    name="preciomin" 
                    class="inputModal"
                    placeholder="Precio mínimo"
                >
                </div>
                <div class="col-12 col-md-6">
                    <label for="preciomin">Hasta $</label>
                    <input 
                        :v-model="preciomax" 
                        type="text"
                        name="preciomax"
                        class="inputModal"
                        placeholder="Precio máximo"
                    >
                </div>
            </b-row>
        </b-col>
        <h4>
            Marcas
        </h4>
      </b-modal>
  </b-container>
</template>

<script>
import AutoItem from '~/components/General/AutoItem.vue'
//import {sendQuotation} from '~/endpoints';
export default {
    data(){
        return{
            autos: [],
            autosFilter: [],
            perPage: 8,
            currentPage: 1,
            pages: null,
            brandFilter:[],
            preciomin: 0,
            preciomax: 0,
            auth: null,
        }
    },
    components:{
        AutoItem,
    },
    watch:{
        async currentPage(){
            console.log('currentPage', this.currentPage);
           this.autosFilter = this.autos.slice(
                this.perPage * (this.currentPage - 1),
                this.perPage * this.currentPage)
            await this.goTop();
        }
    },
     computed: {
      rows() {
        return this.autos.length
      }
    },
   async mounted(){
       await this.$store.dispatch('autos/getAllCars');

        this.preciomin = this.$route.query.preciomin || 0
        this.preciomax = this.$route.query.preciomax || 0
        if(this.$route.query.marcas)
            this.brandFilter = this.$route.query.marcas.split(',')
       await this.getAutos(this.preciomin, this.preciomax,this.brandFilter);
       //await this.getToken();
    },
    methods:{
       async getAutos (preciomin, preciomax, brandFilter) {
        this.autos = await this.$store.getters['autos/getAllBrandCars'];
        this.autosFilter = this.autos;
        if(brandFilter && brandFilter.length){
            this.autos = this.autos.filter(auto => {
                if(brandFilter.indexOf(auto.model.brandName) > -1){
                    return auto;
                }
            })
            if(this.autos.length === 0){
                this.autos = this.autosFilter;
            }
        }
        if(preciomin > 0){
            this.autos = this.autos.filter(
                auto => (auto.minPrice > preciomin))
        }

        if(preciomax > 0 && parseInt(preciomax)>parseInt(preciomin)){
            this.autos = this.autos.filter(
                auto => (auto.minPrice > parseInt(preciomin) && auto.minPrice < parseInt(preciomax)))
        }
         //Data for pagination
         this.pages = this.autos.length % this.perPage === 0 ? 
                        Math.floor(this.autos.length/this.perPage) :
                        Math.floor(this.autos.length/this.perPage) + 1
         this.autosFilter = this.autos.slice(
                this.perPage * (this.currentPage - 1),
                this.perPage * this.currentPage)
       },
       linkGen(pageNum) {
            return `/catalogo/${this.$route.params.modelo}/${pageNum}`
       },
       showModal() {
        this.$refs['modal-filtros'].show();
       },
       goTop(){
            window.scrollTo(0,0);
       },
       /*async getToken (){
           const data = await sendQuotation();
           this.auth = data;
           console.log("getToken -> data", data)
       }*/
    }
}
</script>

<style>

</style>