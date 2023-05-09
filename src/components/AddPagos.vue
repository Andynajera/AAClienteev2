<template>
  <div >
     
   <div style="background-color: pink;">
     <h1 style="text-align:center">
       {{ $t("header.search.caption6") }}
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
         <router-link to="/Pagos">
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
  
       <v-checkbox
         id="input-1"
         v-model="form.pagado"
         label="¿Esta pagado?"
         :counter="20"
         placeholder="Enter pagado" 
         required
       ></v-checkbox>
       <v-text-field
         id="input-1"
         label="YYYY-MM-D"
         v-model="form.date"
         type="text"
         placeholder="Enter date" 
         
       ></v-text-field>
     
   
       <v-container fluid>
      
  </v-container>
 
   
      
   <!--  <v-text-field
         id="input-1"
         v-model="form.pagado"
         :counter="20"
        
         placeholder="Esta pagado" 
         required
       ></v-text-field>
        <v-text-field
         id="input-1"
         v-model="form.date"
         :counter="20"
         type="text"
         placeholder="Enter date" 
         required
       ></v-text-field>--> 
     
     <v-btn type="submit"   color="success" variant="primary">Submit</v-btn>
     
     <v-btn type="reset" color="error" variant="danger">Reset</v-btn>
   </v-form>
     </v-sheet>
   

</div>
 </template>
   
 
 <script>
 import { mapActions } from 'vuex'
 import Datepicker from 'vuejs-datepicker';


 export default {
  
     data(){
      
         return{
             form:{ 
                 name: '', 
                 price:'',
                 total:'',
                notes:'',
                pagado:undefined,
                date:''
               
                
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

                 pagado:this.form.pagado,
                 
                 date:this.form.date
              
                
             })
         },
         onReset(){
 
         },
        ...mapActions(['addPagos'])
     },
 }
 </script>
 
 <style>
 .h1{
   font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
 }
 </style>