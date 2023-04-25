<template>
  <div>
        <router-view />
       <!-- <router-link    to="/">Home</router-link> |
         <router-link  to="/Users">Lista de Usuarios</router-link>|
       <router-link to="/Users/add">añadir Usuarios</router-link>|
        <router-link   to="/Pagos">Lista de precios</router-link>|-->
       <!-- Role Usuarios-->
      <v-container>
      <router-link   v-if="$store.state.role==='admin'"  to="/Users">
        <v-btn variant="success" color="pink">{{ $t("header.search.caption4") }}</v-btn>
        
      </router-link>
    </v-container>
  <v-container>
      <router-link   to="/login">
        <v-btn variant="success" color="pink">{{ $t("header.search.button2") }}</v-btn>
        
      </router-link>
    </v-container>
  <v-container>
      <router-link  v-if="$store.state.role==='admin'"  to="/Pagos">
        <v-btn variant="success" color="pink">{{ $t("header.search.button") }}</v-btn>
        
      </router-link>

    </v-container>
   
     
  <v-container>
      <router-link   v-if="$store.state.role==='userTeacher'"  to="/Users">
        <v-btn variant="success" color="pink">{{ $t("header.search.caption4") }}</v-btn>
        
      </router-link>
     
    </v-container>
  <v-container>
      <router-link   v-if="$store.state.role==='userAndrea'"  to="/">
        <v-btn variant="success" color="yellow">{{ $t("header.search.button3") }}</v-btn>
        
      </router-link>

    </v-container>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>