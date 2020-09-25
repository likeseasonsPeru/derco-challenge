<template>
  <b-container>

      <b-row class="my-5">
          <b-col-12>
              <a href="/" class="linkVolver">Volver</a>
          </b-col-12>
      </b-row>
      
       <b-row class="formulario">
           <b-col md="12" class="text-center my-2">
               <h4>Formulario de <strong>Regístro</strong></h4>
           </b-col> 
           <b-col md="8" class="my-4">

               <b-row>
                   <b-col md="6">
                <b-form-group id="input-group-1" label="Nombre" label-for="input-1">
                <b-form-input  id="input-1"  v-model="form.email"  type="email" required  placeholder="Ingrese su nombre"
                ></b-form-input></b-form-group>
                   </b-col>
                   <b-col md="6">
                <b-form-group  id="input-group-1"  label="Apellido" label-for="input-1" >
                <b-form-input  id="input-1" v-model="form.email"  type="email"  required  placeholder="Ingrese su apellido"
                ></b-form-input>
            </b-form-group>
                   </b-col>

                   <b-col md="6">
                <b-form-group  id="input-group-1"  label="Tipo de Documento" label-for="input-1" >
               <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
            </b-form-group>
                   </b-col>

                   <b-col md="6">
                <b-form-group  id="input-group-1"  label="Número de documento" label-for="input-1" >
                <b-form-input  id="input-1" v-model="form.email"  type="email"  required  placeholder="Ingrese su número de documento"
                ></b-form-input>
            </b-form-group>
                   </b-col>

                   <b-col md="6">
                <b-form-group  id="input-group-1"  label="Celular" label-for="input-1" >
                <b-form-input  id="input-1" v-model="form.email"  type="email"  required  placeholder="Ingrese su celular"
                ></b-form-input>
            </b-form-group>
                   </b-col>

                   <b-col md="6">
                <b-form-group  id="input-group-1"  label="Correo" label-for="input-1" >
                <b-form-input  id="input-1" v-model="form.email"  type="email"  required  placeholder="Ingrese su correo"
                ></b-form-input>
            </b-form-group>
                   </b-col>

                   <b-col md="6">
                <b-form-group  id="input-group-1"  label="Provincia" label-for="input-1" >
               <b-form-select
          id="input-3"
          v-model="form.provincia"
          :options="provincia"
          required
        ></b-form-select>
            </b-form-group>
                   </b-col>

                   <b-col md="6">
                <b-form-group  id="input-group-1"  label="Concesionario" label-for="input-1" >
                <b-form-input  id="input-1" v-model="form.email"  type="email"  required  placeholder="Enter email"
                ></b-form-input>
            </b-form-group>
                   </b-col>

                  
               </b-row>

           </b-col>

           <b-col md="4" class="my-4 autoContainer">

              <img class="imgLoader" v-if="auto.length === 0" src="~/assets/images/gifLoading.gif" alt="Loader Auto"> 
              <AutoCotizador  :car="auto" v-for="(auto,index) in auto" :key="index" />
           </b-col>



       </b-row>
        <b-row class="my-5 text-center">
              <b-col md="12" class="text-center my-5"> 
                <a href="/" class="linkVolver">Volver al <strong>Inicio</strong></a>
              </b-col>
        </b-row>
  </b-container>
</template>

<script>
//
export default {
data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          provincia : null,
          checked: [],
          model: '',
          version: '',
          
        },
        foods: [{ text: 'Seleccione una opción', value: null }, 'DNI', 'CPE'],
        provincia: [{ text: 'Seleccione una opción', value: null }, 'DNI', 'CPE'],
        show: true,
        auto:[],
      }
    },
     async mounted() {
        await this.$store.dispatch('autos/getAllCars');
        console.log(this.$route);
        this.form.model = await this.$route.query.modelo || '';
        this.form.version = await this.$route.query.version || '';
        await this.getAuto(this.form.model,this.form.version)
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.provincia = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      async getAuto (modelo, version){
        let autos = await this.$store.getters['autos/getAllBrandCars']
        let result = autos.filter(auto => (auto.model.slug === modelo && auto.name===version))
        if(result.length > 1)
          this.auto.push(result[0])
        else{
          this.auto = result;
        }
        console.log("getAuto -> this.auto", this.auto)
       }
    }
}
</script>
