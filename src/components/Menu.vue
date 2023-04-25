<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="4000"
    width="3440"
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

    <ListGrado>
    </ListGrado>
  </v-card>
</template>

<script>
import ListGrado from '@/components/ListGrado.vue'
import Vistas from '@/components/Especificas/Vistas.vue'
 export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    components: {
    ListGrado,
        Vistas,//Login
    
  },
  }
</script>

<style>

</style>