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
         placeholder="Enter name" 
         required
       ></v-text-field>
      
       <v-text-field
         id="input-1"
         v-model="form.price"
         :counter="20"
         placeholder="Enter price" 
         required
       ></v-text-field>
       <v-text-field
         id="input-1"
         v-model="form.total"
         :counter="20"
         placeholder="Enter total" 
         required
       ></v-text-field>
       <v-text-field
         id="input-1"
         v-model="form.notes"
         :counter="20"
         type="text"
         placeholder="Enter notes" 
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
                 price:'',
                 total:'',
                notes:'',
                
             },
                
             
         }
     },
     methods:{
         onSubmit(){
           
             this.addPagos({
                 name: this.form.name, 
                 price: this.form.price, 
                 total: this.form.total, 
                 notes: this.form.notes, 
              
                
             })
         },
         onReset(){
 
         },
        ...mapActions(['addPagos'])
     }
 }
 </script>
 
 <style>
 .h1{
   font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
 }
 </style>