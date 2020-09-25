<template>
  <div>
    <Nuxt />
    <MarcasFooter />
    <Footer />
  </div>
</template>
<script>
import MarcasFooter from '~/components/Layout/Footer/Marcas'
import Footer from '~/components/Layout/Footer/Footer'
export default {
    components:{
      MarcasFooter,
      Footer
    }
}
</script>
