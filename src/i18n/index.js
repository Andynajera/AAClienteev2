import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
  
    main:{
        title: 'Hello world',
        subTitle:'another title'
    },
    header:{
        search:{
            caption:'Formations in San Valero',
            caption2:'Payment Information',
            caption3:'Login',
            caption4:'User List',
            captio5:'Users Details',
            caption6:'List of Add Payments',
            caption7:'Add Users',

            button:'Payments',
            button2:'Login',
            button3:'Home',
            button4:'Back',
            button5:'See details',
            button6:'Add',
            button7:'Delete',
            button9:'Search by name',
            button10:'Search by degree'
        }
    }
  },
  es: {
     errors:{
      invalidLogin: 'Usuario o contraseña incorrectos'
     },
    main:{
        title: 'hola mundo',
        subTitle:'otro titulo'
    },
    header:{
        search:{
            caption:'Formaciones en San valero',
            caption2:'Informacion de Pagos',
            caption3:'Iniciar sesion',
            caption4:'Lista de Usuarios',
            caption5:'Detalles de los Usuarios',
            caption6:'Añadir pagos',
            caption7:'Añadir Usuarios',

            button:'Pagos',
            button2:'Iniciar sesion',
            button3:'Menu',
            button4:'Atras',
            button5:'Ver Detalles',
            button6:'Añadir',
            button7:'Borrar',
            button9:'Buscar por nombre',
            button10:'Buscar por grados'

        }
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'es', // set locale
  messages, // set locale messages
})

export{i18n}