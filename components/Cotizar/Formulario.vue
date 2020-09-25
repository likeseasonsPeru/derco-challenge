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

           <b-col md="4" class="my-4">

               <b-tabs pills card end>
        <b-tab  active>
            <b-card-text>
                <h2>
                    Suzuki
                </h2>
                <h4>
                    NewAlto
                </h4>
                <img class="imgAuto"
                    src="" 
                   
                >
                <h3>
                    <span>Desde</span><br>
                    USD 200.00 o S/ 2000.00
                    </h3>
                </b-card-text>
        </b-tab>
    </b-tabs>

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
export default {
data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          provincia : null,
          checked: []
        },
        foods: [{ text: 'Seleccione una opción', value: null }, 'DNI', 'CPE'],
        provincia: [{ text: 'Seleccione una opción', value: null }, 'DNI', 'CPE'],
        show: true
      }
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
      }
    }
}
</script>

<style>
</style>