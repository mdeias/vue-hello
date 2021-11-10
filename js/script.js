
const app = new Vue({
    el: "#app",

    data: {
        messaggio: "",
        miaClasse: ''  
    },

    methods:{
        coloraClasse(classe){
            this.miaClasse = classe;
        }
    }

})