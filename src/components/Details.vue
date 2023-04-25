<template>
    <div>
      <div style="background-color: pink;">
       <h1 style="text-align:center">
        {{ $t("header.search.caption5") }}
      </h1> 
      </div>
  

    <v-sheet width="400" class="mx-auto">
     <!--<router-link  v-if="$store.state.role==='user'" to="/Users" id="bUsers">
            <v-btn variant="success" color="pink">{{ $t("header.search.button4") }}</v-btn>
          </router-link>--> 
      <h1 style="color: brown;">Detalles del usuario {{ $route.params.id }}</h1>
      <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                    cover
                  ></v-img>
        <v-list-group v-if="selectedUsers" >
          <v-list-item><td>name={{ selectedUsers.name }}</td></v-list-item>
          <v-list-item><td>email={{ selectedUsers.email }}</td></v-list-item>
          <v-list-item><td>grado={{ selectedUsers.nameDegree }}</td></v-list-item>
          <v-list-item><td>genero={{ selectedUsers.gender }}</td></v-list-item>
          <v-list-item><td>birth={{ selectedUsers.birth }}</td></v-list-item>
          <v-list-item><td>height={{ selectedUsers.height }}</td></v-list-item>
          <v-list-item><td>brothers={{ selectedUsers.brothers }}</td></v-list-item>
        </v-list-group>
      
    </v-sheet>
    </div>
  </template>
  
  <script>
  
  import { mapState } from "vuex";
  export default {

    computed: {
      ...mapState(["Users"]),
      selectedUsers() {
        return this.Users.filter((Users) => Users.id === this.id)[0];
      },
    },
    created() {
      this.id = parseInt(this.$route.params.id, 10);
    },
    data() {
      return {
        id: 0,
      };
    },
  };
  </script>
  
  <style>
  #bUsers{
     
  display: block;
  padding: 0.5rem 1rem;
  width: 200px;
  margin: 0 auto;
  }
  </style>
  