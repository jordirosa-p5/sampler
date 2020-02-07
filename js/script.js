//Fem que es cridi la funció 'sona()' quan es faci click sobre un div de la classe 'boto'
$(".boto").on("click", sona);

//Fem que s'executi la funció soAcabat() cada cop que un audio acabi de sonar (classe 'so')
$(".so").on("ended", soAcabat);


function sona(event) {
    //Recuperem el número que hem emmagatzemat a cada botó (data-posicio el recuperem amb element.dataset.posicio)
    let posicio = this.dataset.posicio;

    //Fem que al div que ha estat clicat se li afegeixi la classe 'sonant' si no la tenia, o que se la tregui si ja la tenia amb 'element.classList.toggle("classe")
    this.classList.toggle("sonant");

    //Si el botó té la classe 'sonant', posem en marxa l'audio. Si no la té, el pausem
    if (this.classList.contains("sonant")) {
        document.getElementById("audio" + posicio).play();
    } else {
        document.getElementById("audio" + posicio).pause();
    }
}


function soAcabat() {
    //Aquesta funció s'executarà quan un audio arribi al final. Fem que el seu element pare (parentElement) deixi de tenir la classe 'sonant' per què es vegi desactivat
    this.parentElement.classList.remove("sonant");
}
