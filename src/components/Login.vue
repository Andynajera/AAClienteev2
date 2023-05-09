<template>
  <v-card

  >
    <v-system-bar color="deep-purple darken-3"></v-system-bar>

    <v-app-bar
      color="deep-purple accent-4"
      dark
      prominent
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>      <h1 style="text-align: center">
        {{ $t("header.search.caption") }}
      </h1></v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn @click="$i18n.locale = 'es'" style="background-color: red">🇪🇸</v-btn>
    <v-btn @click="$i18n.locale = 'en'" style="background-color: blue"
      >🇨🇦󠁧󠁢󠁥󠁮</v-btn
    >
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            
           <Vistas></vistas>
         </v-list-item>
          
    
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    
    <div>

      <div style="background-color: pink;">
        <h1 style="text-align:center">{{ $t("header.search.caption3") }}
        </h1>
      </div>
 
  <!--boton De menu
  <div id="bhome">
      <router-link  to="/">
        <v-btn  variant="success"  color="yellow">{{ $t("header.search.button3") }}</v-btn>
      </router-link>
   </div>   -->
      <!--formulario-->


    <!-- <v-btn  @click="$store.commit('setAuthenticated')" type="submit" block class="mt-2">Loguearse</v-btn>--> 
      
    <!--</v-form>-->
  



    <v-sheet width="300" class="mx-auto">

<v-form ref="form">
  <v-text-field

    v-model="username"
    type="text"
    label="username"
    required
  ></v-text-field>

  <v-text-field
    v-model="password"
    type="password"
    label="password"
    required
  ></v-text-field>

           <v-btn @click.prevent="doLogin" >Login </v-btn>
    
   
    </v-form>
    </v-sheet>
  </div>
</v-card>

  </template>

<script>
import Vistas from '@/components/Especificas/Vistas.vue'
export default {
   name:'Login',
data(){
  return{
    username:'',
    password:'',

    drawer: false,
      group: null,
  }
},
watch: {
      group () {
        this.drawer = false
      },
    },
    components: {
        Vistas,//Login
    
  },
methods:{
doLogin(){
  this.$store.dispatch('login',{username : this.username,password: this.password})
  .then(ret =>{
    if(!ret){
    alert(this.$t(errors.invalidLogin))
  }
  })

}
}
}
</script>

<style>
#bhome{
 
  display: block;
  padding: 0.5rem 1rem;
  width: 200px;
  margin: 0 auto;

}
</style>