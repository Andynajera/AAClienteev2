<template>
  <div>

    <div style="background-color: pink;">
      <h1 style="text-align:center">
        {{ $t("header.search.caption6") }}
      </h1>
    </div>



    <v-sheet width="340" class="mx-auto">
      <v-layout align-end fill-height pa-10>
        <div class="title font-weight-light" style="color: brown">
          Añadir usuarios
        </div>
      </v-layout>

      <router-link to="/Pagos" id="bPagos">
        <v-btn variant="success" color="pink">{{ $t("header.search.button4") }}</v-btn>
      </router-link>

      <v-form @submit="onSubmit" @reset="onReset">
        <v-text-field
          id="input-1"
          v-model="form.name"
          :counter="20"
          type="text"
          placeholder="Enter name"
          required
        ></v-text-field>
     <!--   <v-text-field
          id="input-2"
          v-model="form.price"
          :counter="20"
          type="text"
          placeholder="Enter precio"
          required
        ></v-text-field>
        <v-text-field
          id="input-3"
          v-model="form.total"
          type="text"
          placeholder="Enter total"
          required
        ></v-text-field>
        <v-text-field
          id="input-3"
          v-model="form.pagado"
          type="text"
          placeholder="Enter si esta pagado"
          required
        ></v-text-field>
        <v-text-field
          id="input-3"
          v-model="form.date"
          type="text"
          placeholder="Enter date"
          required
        ></v-text-field>
        <v-text-field
          id="input-3"
          v-model="form.notes"
          type="text"
          placeholder="Enter notas"
          required
        ></v-text-field>-->

        <v-btn type="submit" color="success" variant="primary">Submit</v-btn>
        <v-btn type="reset" color="error" variant="danger">Reset</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
     
   
   <script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",
    /*    price: "",
        total: "",
        pagado: "",
        date: "",
        notes: "",
        users: [
          {
            id: 0,
            name: "",
            password: "",
            email: "",
            nameDegree: "",
            gender: true,
            birth: "",
            height: 0,
            brothers: 0,
          },
        ],*/
      },
    };
  },
  methods: {
    onSubmit() {
      this.addPagos({
        name: this.form.name,
       /* price: this.form.price,
        total: this.form.total,
        pagado: this.form.pagado,
        date: this.form.date,
        notes: this.form.notes,
        users: this.form.users,*/
      });
    },
    onReset() {},
    ...mapActions(["addPagos"]),
  },
};
</script>
   
   <style>
   #bPagos{
    display: block;
  padding: 0.5rem 1rem;
  width: 200px;
  margin: 0 auto;

   }
.h1 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>