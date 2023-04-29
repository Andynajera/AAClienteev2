
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Users: [],
    Degree: [],
    Pagos: [],

    //Login
    isAuthenticated: false,
    role: ''


  },
  getters: {

  },
  mutations: {

    //Login
    setAuthenticated(state) {
      state.isAuthenticated = true
    },
    setRole(state, role) {
      state.role = role
    },



    //Usuarios
    setUsers(state, payload) {
      state.Users = payload
    },
    setUsersId(state,setIDU){
    state.Users = state.Users.filter(({ id }) => id === setIDU);
    },
    addUsers(state, payload) {
      state.Users.push(payload)
    },
    deleteUser(state, idToRemove) {
      state.Users = state.Users.filter(({ id }) => id !== idToRemove);
    },
    /*deleteUser(state,idToRemove){
     this.Users=this.cars.filter{Users=>Users.id!=id}
   }*/


    /* modifyUsers(state,payload){
       payload.id=
       payload.info={
 
       }
     }*/

    //Grados
    setDegree(state, payload) {
      state.Degree = payload
    },
    addDegree(state, payload) {
      state.Degree.push(payload)
    },
    deleteDegree(state, idToRemove) {
      state.Degree = state.Degree.filter(({ id }) => id !== idToRemove);
    },
    //Pagos
    setPagos(state, payload) {
      state.Pagos = payload
    },
     deletePagos(state, idToRemove) {
       state.Pagos = state.Pagos.filter(({id}) => id !== idToRemove);
     },
    addPagos(state, payload) {
      state.Pagos.push(payload)
    },
  },
  actions: {
    //LOGIN
    login({ commit }, payload) {
      console.log(`payload ${JSON.stringify(payload)}`);
      //fetch
      if (payload.username === 'admin' && payload.password === 'admin') {
        commit('setAuthenticated')
        commit('setRole', 'admin')
        return true

      }
      if (payload.username === 'andrea' && payload.password === 'Logroño') {
        commit('setAuthenticated')
        commit('setRole', 'userAndrea')
        return true

      }
      if (payload.username === 'teacher' && payload.password === 'teacher') {
        commit('setAuthenticated')
        commit('setRole', 'userTeacher')
        return true

      }
      return false



    },



    //USUARIOS
    //ver el listado de usuarios
    fetchUsers({ commit }) {
      fetch('https://expedienteokpro.azurewebsites.net/Users')
        .then(result => result.json())
        .then(data => commit('setUsers', data))
    },
    setUsersId({ commit },id) {
      fetch('https://expedienteokpro.azurewebsites.net/Users' + `/${this.id}`)
        .then(result => result.json())
        .then(data => commit('setUsersId', data))

      //recargar pagina
      commit('setUsersId', id)
    },

    //hacer el post
    addUsers({ commit }, userInfo) {
      debugger
      //commit('addUsers',userInfo)
      fetch('https://expedienteokpro.azurewebsites.net/Users', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      })
        .then(result => result.json())
        .then(data => commit('addUsers', data))
    },

    //Buscar por nombre
    searchUser({ commit }, name) {
      fetch('https://expedienteokpro.azurewebsites.net/Users/name?name=' + `${name}`)


        .then(result => result.json())

        .then(data => commit('setUsers', data))
      commit('setUsers', name)
    },



    deleteUser({ commit }, id) {
      fetch('https://expedienteokpro.azurewebsites.net/Users' + `/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify
      })

        .then(result => result.json())
        .then(data => commit('deleteUser', data))
      //lo que hace es refrescar pantalla
      commit('deleteUser', id)

    },






    //GRADOS
    fetchDegree({ commit }) {
      fetch('https://expedienteokpro.azurewebsites.net/Degree')
        .then(result => result.json())
        .then(data => commit('setDegree', data))
    },
    //Buscar por nombre
    searchDegree({ commit }, name) {
      fetch('https://expedienteokpro.azurewebsites.net/Degree/name?name=' + `${name}`)


        .then(result => result.json())

        .then(data => commit('setDegree', data))
    },
    //hacer el post
    addDegree({ commit }, degreeInfo) {
      //commit('addUsers',userInfo)
      fetch('https://expedienteokpro.azurewebsites.net/Degree', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(degreeInfo)
      })
        .then(result => result.json())
        .then(data => commit('addDegree', data))
    },

    deleteDegree({ commit }, id) {
      fetch('https://expedienteokpro.azurewebsites.net/Degree' + `/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify
      })

        .then(result => result.json())
        .then(data => commit('deleteDegree', data))
      //Resetear pagina sin perderla
      commit('deleteDegree', id)
    },



    //Pagos

    fetchPagos({ commit }) {
      fetch('https://expedienteokpro.azurewebsites.net/Pagos')
        .then(result => result.json())
        .then(data => commit('setPagos', data))
    },
    searchPagos({ commit }, name) {
      fetch('https://expedienteokpro.azurewebsites.net/Pagos/pagado?pagado=' + `${true}`)


        .then(result => result.json())

        .then(data => commit('setPagos', data))
      commit('setPagos', name)
    },

     deletePagos({commit}, id) {
       fetch('https://expedienteokpro.azurewebsites.net/Pagos' + `/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify
      })
      
      .then(result => result.json())
      .then(data => commit('deletePagos', data))
      commit('deletePagos', id)
    },
    //hacer el post
    addPagos({ commit }, pagosInfo) {
      fetch('https://expedienteokpro.azurewebsites.net/Pagos', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(pagosInfo)
      })
        .then(result => result.json())
        .then(data => commit('addPagos', data))
    },

  },
  modules: {
  }
})

