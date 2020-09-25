<template>
 <div>
  <b-container fluid>
    <b-row>
      <Carrousel />
    </b-row>
  </b-container>
  <b-container fluid class="section2Home">
      <SectionModelos />
      <Section3Home />
  </b-container>
 </div>
</template>

<script>
import Carrousel from '~/components/Home/SwiperSlider'
import SectionModelos from '~/components/Home/SectionModelos'
import Section3Home from '~/components/Home/SectionButton'
export default {
  loading: {
    color: 'red',
    height: '3px',
    duration: 2000,
  },
  components: {
    Carrousel,
    SectionModelos,
    Section3Home
  },
  mounted(){
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 5000)
    })
  }
}
</script>
