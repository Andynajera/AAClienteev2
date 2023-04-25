<template>
  <!--header-->
  <div>
    <!--i18n-->
   
  
    <v-container>
      <router-link   v-if="$store.state.role==='admin'"  to="/addDegree">
        <v-btn variant="success" color="pink">{{ $t("header.search.button6") }}</v-btn>
        
      </router-link>
    </v-container>

    <!--<router-link to="/login">
      <v-btn variant="success" color="pink">{{
        $t("header.search.button2")
      }}</v-btn>
    </router-link>
    <router-link to="/">
      <v-btn variant="success" color="yellow">{{
        $t("header.search.button3")
      }}</v-btn>
    </router-link>-->

    <v-card class="mx-auto" max-width="1500">
      <v-container>
        <!--Buscar por grado-->
        <v-container>        <v-text-field
        
          class="text-green"
          type="text"
          v-model="name"
          clearable
          hide-details="auto"
          label="Filled"
          placeholder="Search"
          filled
          rounded
          dense
          single-line
          append-icon="mdi-magnify"
         
        />
        <v-btn @click="launchQuery">{{ $t("header.search.button9") }}</v-btn>

        <!---->
</v-container>

        <v-row dense>
          <v-col v-for="item in Degree" :key="item.id" cols="12">
            <v-card color="#952175" theme="dark">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5">
                    {{ item.name }}
                  </v-card-title>

                  <v-card-subtitle>{{ item.nameDegree }}</v-card-subtitle>
                  <v-card-subtitle>{{ item.quedanPlazas }}</v-card-subtitle>
                  <v-card-subtitle>{{ item.dataExpediente }}</v-card-subtitle>
                  <v-card-subtitle>{{ item.price }}</v-card-subtitle>
                  <v-card-subtitle>{{ item.cantidadPlazas }}</v-card-subtitle>
                </div>

                <v-avatar class="ma-3" size="125" rounded="0">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                  ></v-img>
                </v-avatar>
                <!--Boton con Role de administrador para borrar-->
                <v-btn  v-if="$store.state.role==='admin'" @click="onDeleteDegree(item.id)"
                  color="pink"
                  variant="primary"
                  >{{ $t("header.search.button7") }}, {{ item.id }}</v-btn>
              </div>
              
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      show: false,
    };
  },

  name: "ListGrado",
  computed: {
    ...mapState(["Degree"]),
  },
  methods: {
    ...mapActions({ deleteDegree: "deleteDegree",searchDegree: "searchDegree" }),

    launchQuery() {
      this.searchDegree(this.name);
    },
    onDeleteDegree(id) {
      this.deleteDegree(id);
    },
    name(){
      
    },

  },
};
</script>

<style>
.text-green input {
  background-color: rgb(217, 217, 217);
  width: 20px;
}
</style>