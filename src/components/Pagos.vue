<template>

   
  
    <v-card class="mx-auto" max-width="1500">

      <div style="background-color: pink;">
       <h1 style="text-align:center">
        {{ $t("header.search.caption2") }}
      </h1> 
    </div>
 
      <v-container class="bg-surface-variant"> 
        <router-link to="/AddPagos" id="bpagos">no esta listo
        <v-btn variant="success" color="yellow">{{ $t("header.search.button6") }}</v-btn>
        
      </router-link>
       
        <v-row no-gutters>
         
          <v-col v-for="item in Pagos" :key="item.id" cols="19" sm="3">
           <!-- <v-col v-for="item in Users" :key="item.id" cols="19" sm="3">-->
            <v-sheet class="pa-2 ma-2">
              <v-card class="mx-auto" max-width="200" min-height="525">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="200px"
                  cover
                ></v-img>
                <v-btn block color="pink">
                <v-card-title style="font-size: 17px" class="texto"
                    ><b>Nombre:&nbsp; </b> {{ item.name }}</v-card-title
                  >
                </v-btn>
                <div>
                  
            
                  <v-card-title style="font-size: 12px" class="texto"
                    ><b>precio: &nbsp; </b> {{ item.price }}</v-card-title  
                  >
                  <v-card-title style="font-size: 12px" class="texto"
                    ><b>total: &nbsp; </b> {{ item.total }}</v-card-title>
                    <v-card-title style="font-size: 12px" class="texto"
                    ><b>pagado: &nbsp; </b> {{ item.pagado }}</v-card-title>
                    <v-card-title style="font-size: 12px" class="texto"
                    ><b>fecha: &nbsp; </b> {{ item.date }}</v-card-title>
                    <v-card-title style="font-size: 12px" class="texto"
                    ><b>notas: &nbsp; </b> {{ item.notes }}</v-card-title>
                    <v-card-title style="font-size: 12px" class="texto"
                    ><b>usuarios: &nbsp; </b> {{ item.users }}</v-card-title>
               <!--//Conseguir clikar y que vaya al id-->   
                  <v-btn :item="Pagos" v-on:click="showUserDetails(item.id)" color="yellow" variant="primary">{{ $t("header.search.button5") }}</v-btn>
          <!-- <v-btn @click="onDeletePagos(item.id)"  color="pink" variant="primary">BORRAR {{ item.id }}</v-btn> --> 
                 
               
                </div>
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  
  </template>
  
  <script>
  
  import { mapState,mapActions } from "vuex";
  
  export default {

    data() {
      return { };
    },
    name:'Pagos',
    
    computed: {
      ...mapState(["Pagos"]),
    },
    created() {
     
    },
    methods: {
   
      showUserDetails(item) {
        //enrrutamiento clickando al que pinches
        this.$router.push(`Users/${item}`);
      },
     /* 
      ...mapActions({ deletePagos: 'deletePagos',}),
      
      onDeletePagos(id) {
            this.deletePagos(id)
          },

       */
    },
  


  }; 
  </script>
  
  <style>
  #bpagos{
    display: block;
  padding: 0.5rem 1rem;
  width: 200px;
  margin: 0 auto;
  }
  </style>