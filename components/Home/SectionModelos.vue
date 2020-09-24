<template>
    <b-container class="destacadosHomeContainer">
      <b-row> 
        <b-col class="titleSection">
            <h1>
            Modelos <span>Destacados</span>
            </h1>
        </b-col>
      </b-row>
      <b-row>
          <b-card no-body class="autoItem">
            <img class="logoBrand" src="" alt="">
            <b-tabs pills card end>
                <b-tab title="Tab 1" active>
                    <b-card-text>
                       <h2>
                            Nombre modelo #1
                        </h2>
                        <h4>
                            nombre Version
                        </h4>
                        <img class="imgAuto" src="" alt="">
                        <h3>
                            <span>Desde</span><br>
                            USD #Dolares o S/ #Soles*
                        </h3>
                    </b-card-text>    
                </b-tab>
                <b-tab title="Tab 2">
                    <b-card-text>
                        <h2>
                            Nombre modelo #2
                        </h2>
                        <h4>
                            nombre Version
                        </h4>
                        <img class="imgAuto" src="" alt="">
                        <h3>
                            <span>Desde</span><br>
                            USD #Dolares o S/ #Soles*
                        </h3>
                    </b-card-text>
                </b-tab>
            </b-tabs> 
            <a href="/cotizar/#slug_name">
                Cotizar
            </a>
          </b-card>
      </b-row>
    </b-container>
</template>

<script>
export default {
    name:'SectionModelos',
    data(){
        return{
            
        }
    },
}
</script>