<template>
    <b-container class="destacadosHomeContainer">
      <b-row> 
        <b-col class="titleSection">
            <h1>
            Modelos <span>Destacados</span>
            </h1>
        </b-col>
      </b-row>
      <b-row>
        <AutoItem :car="auto" v-for="(auto,index) in autos" :key="index"/>
      </b-row>
    </b-container>
</template>
<script>
//
import AutoItem from '~/components/General/AutoItem'
export default {
    name:'SectionModelos',
    components:{
        AutoItem,
    },
    data(){
        return{
            autos:[],
        }
    },
    async mounted() {
        await this.$store.dispatch('autos/getAllCars');
        await this.getDestacados();
    },
    methods:{
        async getDestacados() {
            this.autos = await this.$store.getters['autos/getAutosDestacados'];
        }
    }
}
</script>