
<template>
   <div >
      
    <div style="background-color: pink;">
      <h1 style="text-align:center">
        {{ $t("header.search.caption7") }}
        </h1>
      </div>
 


    <v-sheet width="340" class="mx-auto">
        <v-layout
            align-end
            fill-height
            pa-10
          >
            <div class="title font-weight-light" style="color: brown;">{{ $t("header.search.button6") }}</div>
          </v-layout>
          <router-link to="/Users">
            <v-btn variant="success" color="pink">{{ $t("header.search.button4") }}</v-btn>
          </router-link>
      <v-form @submit="onSubmit" @reset="onReset"  >
     


        <v-text-field
          id="input-1"
          v-model="form.name"
          :counter="20"
          type="text"
          :rules="rulesN"

          placeholder="Enter name" 
          required
        ></v-text-field>
        <v-text-field
          id="input-2"
          v-model="form.nameDegree"
          :counter="20"
          type="text"
          :rules="rulesND"

          placeholder="Enter degree"
          required
        ></v-text-field>
        <v-text-field
          id="input-3"
          v-model="form.email"
          type="text"
          placeholder="Enter email"
          :rules="rulesE"
          required
        ></v-text-field>
        <v-text-field
          id="input-3"
          v-model="form.asignaturaMAtriculadas"
          placeholder=" asignatura MAtriculadas"
          :rules="asignaturas"
          required
        ></v-text-field>

        <v-checkbox
         id="input-1"
         v-model="form.gender"
         label="¿Es mujer?"
         :counter="20"
         placeholder="Enter woman" 
         required
       ></v-checkbox>
       <v-text-field
         id="input-1"
         label="fecha de matriculacion ,YYYY-MM-D"
         v-model="form.matriculacion"
         type="text"
         :rules="rulesMatr"
         placeholder="fecha de matriculacion" 
         required
       ></v-text-field>
       <v-text-field
         id="input-1"
         :rules="rulesNote"
         v-model="form.notas"
         type="text"
         placeholder="Nota media" 
         required
       ></v-text-field>
      <v-btn type="submit"   color="success" variant="primary">Submit</v-btn>
      <v-btn type="reset" color="error" variant="danger">Reset</v-btn>
    </v-form>
      </v-sheet>
    

</div>
  </template>
    
  
  <script>
  import { mapActions } from 'vuex'
  export default {
      data(){
          return{
              form:{ 
                  name: '', 
                  nameDegree:'',
                  email: '',
                  notas:'',
                  gender:undefined,
                  asignaturaMAtriculadas:'',
                  matriculacion:''


                 
              },



              rulesN: [
        value => {
          if (value) return true

          return 'You must enter name.'
        },
      ],
      rulesND: [
        value => {
          if (value) return true

          return 'You must enter nameDegree.'
        },
      ],
      rulesE: [
       

        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      
      rulesMatr: [
        value => {
          if (value) return true

          return 'You must enter matricula.'
        },
      ],
      rulesNote: [
        value => {
          if (value) return true

          return 'You must enter note.'
        },
      ],
      asignaturas: [
        value => {
          if (value) return true

          return 'You must enter note.'
        },
      ],
                 
              
          }
      },
      methods:{
          onSubmit(){
            
              this.addUsers({
                  name: this.form.name, 
                  nameDegree: this.form.nameDegree,
                  email: this.form.email,
                  notas: this.form.notas,
                  gender: this.form.gender,
                  asignaturaMAtriculadas: this.form.asignaturaMAtriculadas,
                  matriculacion: this.form.matriculacion,
              })
          },
          onReset(){
  
          },
         ...mapActions(['addUsers'])
      },}

  
  </script>
  
  <style>
  .h1{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  }
  </style>