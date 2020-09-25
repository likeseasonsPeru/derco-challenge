<template>
  <b-container>
      <b-row class="buttonActions">
            <nuxt-link to="/">
                <font-awesome-icon 
                    icon="chevron-left"
                    :style="{width : '12px', height: '12px'}"
                /> Volver al <span>inicio</span>
            </nuxt-link>
            <button>
                <font-awesome-icon 
                    icon="filter"
                    :style="{width : '12px', height: '12px'}"
                /> Filtrar <span>resultados</span>
            </button>
      </b-row>
      <b-row class="rowModelos">
          <AutoItem :car="auto" v-for="(auto,index) in autosFilter" :key="index"/>
          <b-pagination-nav
            v-if="pages !== null"
            :link-gen="linkGen"
            :value="currentPage"
            :number-of-pages="pages" use-router
            :prefetch="true"
            class="paginationStyle"
        ></b-pagination-nav>
      </b-row>
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
            currentPage: null,
            pages: null,
            brandFilter:[],
            priceFilter: [],
        }
    },
    components:{
        AutoItem,
    },
    params:{
        modelo: String,
        page: Number,
    },
     computed: {
      rows() {
        return this.autos.length
      }
    },
   async mounted(){
       await this.$store.dispatch('autos/getAllCars');
       if(this.$route.params.modelo && this.$route.params.page){
           this.brandFilter.push(this.$route.params.modelo)
           this.currentPage = this.$route.params.page;
       }else{
           this.$route.push({name: 'index'})
       }
       await this.getAutos()
        
    },
    methods:{
       async getAutos () {
         this.autos = await this.$store.getters['autos/getAllBrandCars'];
         console.log("getAutos -> this.autos", this.autos)
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
    }
}
</script>

<style>

</style>