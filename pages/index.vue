<template>
 <div>
  <b-container fluid>
    <b-row>
      <Carrousel />
    </b-row>
  </b-container>
  <b-container fluid class="section2">
      <SectionModelos />
  </b-container>
 </div>
</template>

<script>
import Carrousel from '~/components/Home/SwiperSlider'
import SectionModelos from '~/components/Home/SectionModelos'
export default {
  loading: false,
  components: {
    Carrousel
  }
}
</script>
