<template>
  <b-container>
      <b-row class="buttonActions">
            <nuxt-link to="/">
                <font-awesome-icon 
                    icon="chevron-left"
                    :style="{width : '12px', height: '12px'}"
                /> Volver al <span>inicio</span>
            </nuxt-link>
            <button :click="showModal">
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
      <b-modal ref="modal-filtros" hide-footer hide-header>
        <p class="my-4">Hello from modal!</p>
    </b-modal>
  </b-container>
</template>

<script>
import AutoItem from '~/components/General/AutoItem.vue'
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
            preciomax: 0
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
        console.log("mounted -> preciomin", this.preciomin)
        this.preciomax = this.$route.query.preciomax || 0
        console.log("mounted -> preciomax", this.preciomax)
        if(this.$route.query.marcas)
            this.brandFilter = this.$route.query.marcas.split(',')
        console.log("mounted -> brandFilter", this.brandFilter)
       await this.getAutos(this.preciomin, this.preciomax,this.brandFilter);
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

         console.log("getAutos -> this.autos", this.autos)

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
       }
    }
}
</script>

<style>

</style>