<template>
        <swiper ref="mySwiper" class="sliderContainer" :options="swiperOptions">
            <swiper-slide v-for="(banner,index) in banners" :key="index+1">
                <a :href="banner.url" target="_blank"> 
                    <img
                    class="slideImage"
                    :src="banner.imageSrc"
                    :alt="banner.title"
                    />
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper> 
</template>
<script>
export default {
  name: 'Carrousel',
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        loop:true,
        effect: 'slide',
        autoplay: {
          delay: 2000,
          disableOnInteraction:false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      },
      banners: [],
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.getBanners()
  },
  methods: {
    async getBanners() {
      const screenWidth = window.screen.width;
      const sliderSuzuki = await this.$store.getters.getSliderSuzuki;
      const sliderMazda = await this.$store.getters.getSliderMazda;
      const sliderGW = await this.$store.getters.getSliderGW;
      if(screenWidth < 768){
        this.banners = sliderSuzuki.mobile.slice(0,2).
                    concat(sliderMazda.mobile.slice(0,2)).
                    concat(sliderGW.mobile.slice(0,2))
          
      }else{
        this.banners = sliderSuzuki.desktop.slice(0,2).
                    concat(sliderMazda.desktop.slice(0,2)).
                    concat(sliderGW.desktop.slice(0,2))
      }
    }
  }
}
</script>
