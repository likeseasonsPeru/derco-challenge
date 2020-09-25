<template>
    <div>
        <Header />
        <b-col sm="12" class="sectionCatalogo">
            <PaginationSection />
        </b-col>
    </div>
</template>

<script>
import Header from '~/components/Layout/Header';
import PaginationSection from '~/components/Catalogo/PaginationSection'
export default {
    loading: {
    color: 'red',
    height: '3px',
    duration: 2000,
  },
  components:{
      Header,
      PaginationSection
  },
  mounted(){
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  }
}
</script>

<style>

</style>