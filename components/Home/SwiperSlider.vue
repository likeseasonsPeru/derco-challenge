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
  async mounted() {
    await this.$store.dispatch('sliders/getAllSliders');
    await this.getBanners();
  },
  methods: {
    async getBanners() {
      const screenWidth = window.screen.width;
      const sliderSuzuki = await this.$store.getters['sliders/getSliderSuzuki'];
      const sliderMazda = await this.$store.getters['sliders/getSliderMazda'];
      const sliderGW = await this.$store.getters['sliders/getSliderGW'];
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

<style>
/* Bullets */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal>.swiper-pagination-bullets {
  bottom: 65px;
}

.swiper-pagination-bullet {
  width: 30px;
  height: 4px;
  display: inline-block;
  border-radius: 0%;
  background: rgba(255, 255, 255, 0.6);
  border: 0px solid white;
  opacity: 1 !important;
  outline: none;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  width: 30px;
  height: 4px;
  background: white;
  background: rgba(255, 255, 255, 1);
  border: 1px solid white;
  outline: none;
}


@media(max-width: 767px) {

  .slideImage,
  .slideDimensions {
    height: 550px;
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 4px;
  }

  .swiper-pagination-bullet-active {
    width: 20px;
    height: 4px;
  }

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal>.swiper-pagination-bullet {
    bottom: 5px;
  }
}

@media(min-width: 768px) {

  .slideImage,
  .slideDimensions {
    height: 425px;
  }
}

@media(min-width: 1024px) {

  .slideImage,
  .slideDimensions {
    height: 550px;
  }
}

@media(min-width: 1250px) {

  .slideImage,
  .slideDimensions {
    height: 600px;
  }
}
</style>
