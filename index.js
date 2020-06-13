/*
    * Esta funcion fue creada para devolver 3 valores existenetes en base a multiplos de 3 y 5,
      los cuales responden "A" para multiplos de 3, "B" para multiplos de 5 y "Multiple of Both",
      para multiplos de Ambos.
      Creado: Brenda Enith Flores Alvarez (enithflores20@gmail.com)
    */
function multiplos() {
    for (let number = 1; number <= 100 ; number++) {
        var x = number % 3;
        var z=number % 5;
        if (x==0&&z==0) {
            console.log("Multiple of Both"+"_"+number);
        }
        else {

        if (x==0) {
            console.log("A"+"_"+number);
        }
        if (z==0) {
            console.log("B"+"_"+number);
        }
        }
    }
}

multiplos();
