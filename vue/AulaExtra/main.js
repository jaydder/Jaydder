var app = new Vue({
  el : "#app",
  data :{
    "name" : "Jaydder",
    "lastName" : "OLiveira",
    "grade1" : 8,
    "grade2" : 9,
    "active" : true,
    "quantity" : 0,
    "showDisciplines" : false,
    "disciplines" : ["LPV","LPW","LPM","Lógica","Matemática"],
    "products" : [
      {
        "ID" : 1,
        "color" : "verde",
        "imagemDeion" : "blablabla"
      },
      {
        "ID" : 2,
        "color" : "azul",
        "imagemDeion" : "blebleble"
      }
    ]
},
  methods : {
    showMSG() {
      alert("Mas ahhh" +" "+ this.name +" "+ this.lastName);
    },
    add() {
      this.quantity += 1 ;
    },
    remove() {
      if(this.quantity > 0){
        this.quantity -= 1;
      }
    },
    showDisc() {
      this.showDisciplines = true;
    },
    noShowDisc() {
      this.showDisciplines = false;
    }
  },
  computed : {
    getFullName() {
        return this.name + " " +  this.lastName;
    },
    calculateMediaArthmedtic() {
      return (this.grade1 + this.grade2) / 2 ;
    }
  }
});
