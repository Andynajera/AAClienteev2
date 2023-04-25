<template>
  <v-card class="mx-auto" max-="1500">
    <div style="background-color: pink">
      <h1 style="text-align: center">
        {{ $t("header.search.caption4") }}
      </h1>
    </div>

    <v-row no-gutters id="gene">

      <!--Buscar por nombre-->
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
      <v-btn  @click="launchQuery">{{ $t("header.search.button9") }}</v-btn>

      <!---->
</v-container>
      <v-col v-for="n in 1" :key="n" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2">
          <router-link   to="/Users/add" id="bUsers">
            <v-btn variant="success" color="pink">{{
              $t("header.search.button6")
            }}</v-btn>
          </router-link>
          <router-link  v-if="$store.state.role==='admin'" to="/Pagos" id="bPagos">
            <v-btn variant="success" color="pink">{{
              $t("header.search.button")
            }}</v-btn>
          </router-link>
          <router-link to="/" id="bHome">
            <v-btn variant="success" color="pink">{{
              $t("header.search.button10")
            }}</v-btn>
          </router-link>
        </v-sheet>
      </v-col>
    </v-row>

    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col v-for="item in Users" :key="item.id" cols="19" sm="3">
          <v-sheet class="pa-2 ma-2">
            <v-card class="mx-auto" max-width="200" min-height="525">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
                cover
              ></v-img>
              <v-btn block color="pink">
                <!--<v-text style="color: white" :item="Users" v-on:click="showUserDetails" class="texto"
                    ><b>USUARIO</b></v-text
                    
                  >-->
                <v-card-title style="font-size: 17px" class="texto"
                  ><b>Nombre:&nbsp; </b> {{ item.name }}</v-card-title
                >
              </v-btn>
              <div>
                <v-card-title style="font-size: 12px" class="texto"
                  ><b>Email: &nbsp; </b> {{ item.email }}</v-card-title
                >
                <v-card-title style="font-size: 12px" class="texto"
                  ><b>Grado: &nbsp; </b> {{ item.nameDegree }}</v-card-title
                >
                <!--//Conseguir clikar y que vaya al id-->

                <v-btn
                  :item="Users"
                  v-on:click="showUserDetails"
                  color="yellow"
                  variant="primary"
                  >{{ $t("header.search.button5") }}</v-btn
                >
                <!--delete-->
                <v-btn  v-if="$store.state.role==='admin'"
                  @click="onDeleteUser(item.id)"
                  color="pink"
                  variant="primary"
                  >{{ $t("header.search.button7") }}, {{ item.id }}</v-btn
                >
              </div>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
  
  <script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  name: "List",
  computed: {
    ...mapState(["Users"]),
  },
  created() {
    /* fetch('https://localhost:7192/Users')
      .then(result => result.json())
      .then(data=>this.Users=data)*/
  },
  methods: {
    showUserDetails(item) {
      //enrrutamiento clickando al que pinches
      this.$router.push(`Users/${item.id}`);
    },
    ...mapActions({ deleteUser: "deleteUser", searchUser: "searchUser" }),

    launchQuery() {
      this.searchUser(this.name);
    }, 
    //metodo creado por dar error en console
    name(){},
    
    onDeleteUser(id) {
      this.deleteUser(id);
    },
  },
};
</script>
  
  <style>
#bUsers {
  display: inline-block;
  padding: 0.5rem 1rem;
  width: 200px;
  margin: 0 auto;
}
#bPagos {
  display: inline-block;
  padding: 0.5rem 1rem;
  width: 200px;
  margin: 0 auto;
}
#bHome {
  display: inline-block;
  padding: 0.5rem 1rem;
  width: 200px;
  margin: 0 auto;
}
#gene {
  display: block;
  width: 200px;
  margin: 0 auto;
}
.text-green input {
      background-color: rgb(217, 217, 217);
    }
</style>