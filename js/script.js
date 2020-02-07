$(".boto").on("click", sona);
$(".so").on("ended", soAcabat);


function sona(event) {
    let posicio = this.dataset.posicio;
    //document.getElementById("audio" + posicio).src = arxius[posicio];
    this.classList.toggle("sonant");

    if (this.classList.contains("sonant")) {
        document.getElementById("audio" + posicio).play();
    } else {
        document.getElementById("audio" + posicio).pause();
    }
}


function soAcabat() {
   this.parentElement.classList.toggle("sonant"); 
}