<template>
  
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

</template>

<script>
export default {
   name:'Login',
data(){
  return{
    username:'',
    password:''
  }
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