<template>
    <b-col md="6" lg="4" xl="3" class="autoItem">
        <img v-if="car.model.brandName === 'Suzuki'" 
            class="logoBrand" 
            src="~/assets/images/suzuki-logo.png" 
            :alt="car.model.brandName"
        >
        <img v-if="car.model.brandName === 'Mazda'" 
            class="logoBrand" 
            src="~/assets/images/mazda-logo.png" 
            :alt="car.model.brandName"
        >
        <img v-if="car.model.brandName === 'Greatwall'" 
            class="logoBrand" 
            src="~/assets/images/great_wall-logo.png" 
            :alt="car.model.brandName"
        >
        <img v-if="car.model.brandName === 'Changan'" 
            class="logoBrand" 
            src="~/assets/images/changan-logo.png" 
            :alt="`${car.model.brandName} - Derco Perú`"
        >
    <b-tabs pills card end>
        <b-tab :title="price.type" v-for="(price,index) in car.prices" :key="index" active>
            <b-card-text>
                <h2>
                    {{car.model.name}}
                </h2>
                <h4>
                    {{car.name}}
                </h4>
                <img class="imgAuto"
                    :src="car.image.url" 
                    :alt="`${car.model.name} - ${car.name}  Derco Perú`"
                >
                <h3>
                    <span>Desde</span><br>
                    USD {{price.value}} o S/ {{price.convertedValue.toFixed(2)}}*
                    </h3>
                </b-card-text>
        </b-tab>
    </b-tabs>
    <nuxt-link 
        :to="`/cotizar?modelo=${car.model.slug}&version=${car.name}`" 
        class="linkCotizar">
        Cotizar
    </nuxt-link>
 </b-col>
</template>

<script>
export default {
    name: 'AutoItem',
    props: {
        car: Object
    }
}
</script>

<style>

</style>