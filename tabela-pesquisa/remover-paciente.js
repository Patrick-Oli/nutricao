
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {


    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function () {
        event.target.parentNode.remove();
    }, 1500);

});

//pacientes.forEach(function(paciente) {
//    paciente.addEventListener("dblclick", function() {
//        console.log("Funcionou!");
//        this.remove();
//    });
//});