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

      </b-row>
      <b-row>
          <h6>paginacion</h6>
      </b-row>
  </b-container>
</template>

<script>
export default {
    data(){
        return{
            autos: []
        }
    },
   async mounted(){
       await this.getAutos()
    },
    methods:{
       async getAutos () {
         this.autos = await this.$store.state.autos.autosSuzuki;
         console.log("getAutos -> this.autos", this.autos)
       }
    }
}
</script>

<style>

</style>