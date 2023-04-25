<template>
  
  <Menu>
    <ListGrado></ListGrado>
    
    <login></login>
 
</Menu>

</template>

<script>

import Menu from '@/components/Menu.vue'
import ListGrado from "@/components/ListGrado.vue";
//import Login from '@/components/Login.vue'
export default {
  name: "Home",
  

  components: {
    ListGrado,//Login
    Menu
  },
};
</script>
