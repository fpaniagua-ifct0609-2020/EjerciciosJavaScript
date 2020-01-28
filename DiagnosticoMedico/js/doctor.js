function diagnosticar() {
    //Línea de comentario

    /*
    Bloque de comentarios
    */
    console.log("DIAGNOSTICANDO");

    var dolorDeCabeza = document.getElementById("dolordecabeza").checked;
    var fiebre = document.getElementById("fiebre").checked;
    var origen = document.getElementById("origen").checked;

    if (dolorDeCabeza == true) {
        if (fiebre == true) {
            if (origen == true) {
                alert("Coronavirus");
            } else {
                alert("Gripe");
            }
        } else {
            alert("No tienes nada");
        }
    } else {
        alert("Estas fenomenal");
    }

}
