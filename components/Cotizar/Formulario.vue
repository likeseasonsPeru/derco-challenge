<template>
<b-container fluid>
    <b-row class="my-5">
        <b-col-12>
            <nuxt-link to="/catalogo" class="linkVolver">
            <font-awesome-icon 
                    icon="chevron-left"
                    :style="{width : '12px', height: '12px'}"
                />
            Volver</nuxt-link>
        </b-col-12>
    </b-row>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-row class="formulario">
            <b-col md="12" class="text-center my-2">
                <h4>Formulario de <strong>Regístro</strong></h4>
            </b-col>
            <b-col md="8" class="my-4">
                <b-row>
                    <b-col md="6">
                        <b-form-group id="input-group-1" label="Nombre" label-for="input-1">
                            <b-form-input id="input-1" v-model="form.name" type="text" required
                                placeholder="Ingrese su nombre"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group id="input-group-2" label="Apellido" label-for="input-2">
                            <b-form-input id="input-2" v-model="form.lastname" type="text" required
                                placeholder="Ingrese su apellido"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group id="input-group-3" label="Tipo de Documento" label-for="input-3">
                            <b-form-select id="input-3" v-model="form.type_document" :options="document_options" required />
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group id="input-group-4" label="Número de documento" label-for="input-4">
                            <b-form-input id="input-4" v-model="form.num_document" type="text" required
                                placeholder="Ingrese su número de documento"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group id="input-group-5" label="Celular" label-for="input-5">
                            <b-form-input id="input-5" v-model="form.phone" type="text" required
                                placeholder="Ingrese su celular"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group id="input-group-1" label="Correo" label-for="input-6">
                            <b-form-input id="input-6" v-model="form.email" type="email" required
                                placeholder="Ingrese su correo"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group id="input-group-7" label="Provincia" label-for="input-7">
                            <b-form-select id="input-7" v-model="form.provincia" :options="provincia" required>
                            </b-form-select>
                        </b-form-group>
                    </b-col>

                    <b-col md="6">
                        <b-form-group id="input-group-8" label="Concesionario" label-for="input-8">
                            <b-form-select id="input-8" v-model="form.concesionario" :options="concesionario" required>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col md="12">
                        <b-form-group id="input-group-9">
                            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                                <b-form-checkbox value="me">Mis datos personales serán tratados conforme a la Cláusula
                                    Informativa que he leído.</b-form-checkbox>
                            </b-form-checkbox-group>
                        </b-form-group>
                        <span class="my-3">
                            Derco podrá enviarme información sobre promociones y ofertas comerciales de sus productos y
                            servicios, conforme a la Cláusula de Datos Personales:</span>
                    </b-col>
                    <b-form-group class="ml-3 mb-4 mt-2">
                        <b-form-radio v-model="form.selected" name="autorizo" value="A">Sí, autorizo a Derco.
                        </b-form-radio>
                        <b-form-radio v-model="form.selected" name="no-autorizo" value="B">No autorizo, prefiero perder la
                            oportunidad de recibir ofertas y promociones.</b-form-radio>
                    </b-form-group>
                    <b-col md="12" class="text-center mt-2">
                        <b-form-group id="input-group-10" label-for="input-10">
                            <b-button type="submit" variant="danger">Enviar</b-button>
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
                <nuxt-link to="/" class="linkVolver">
                <font-awesome-icon 
                    icon="chevron-left"
                    :style="{width : '12px', height: '12px'}"
                />
                Volver al <strong>Inicio</strong></nuxt-link>
            </b-col>
        </b-row>
    </b-form>
</b-container>
</template>

<script>
import {getSucursales} from '~/endpoints';
export default {
data() {
      return {
        form: {
          email: '',
          name: '',
          lastname:'',
          type_document: '',
          num_document: '',
          phone: '',
          provincia : '',
          concesionario: '',
          checked: [],
          model: '',
          version: '',
          brandName:'',
          selected:false,
        },
        document_options: [
        { text: 'Seleccione una opcion', value: '' },
          { text: 'DNI', value: 'DNI' },
          { text: 'RUC', value: 'RUC' },
          { text: 'Pasaporte', value: 'Pasaporte' },
        ],
        provincia: [{ text: 'Seleccione una opción', value: '' }, 'Lima'],
        concesionario: [{ text: 'Seleccione una opción', value: '' }, 'Derco'],
        sucursales:[],
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
        let totalSucursales = await getSucursales(this.brandName);
        this.sucursales = await totalSucursales.regions;
        console.log("mounted -> this.sucursales", this.sucursales)
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        console.log(this.form)
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.provincia = null
        this.form.concesionario = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      async getAuto (modelo, version){
        let autos = await this.$store.getters['autos/getAllBrandCars']
        let auto = autos.filter(auto => (auto.model.slug === modelo))
        console.log("getAuto -> auto", auto)
         if(auto.length > 1)
            this.auto.push(auto[0]);
         else{
             this.auto.push(auto[0]);
         }
         this.brandName = this.auto[0].model.brandName;
         console.log("getAuto -> this.brandName", this.brandName)
       }
    }
}
</script>
