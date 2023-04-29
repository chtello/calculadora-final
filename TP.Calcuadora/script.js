const t = document.getElementsByClassName("teclas")
const b = document.getElementsByClassName("borr");
let aux = document.getElementById("barra");
let result = "" ;
let ac = "";

  function tec(cif) {
    if (t) {
        document.getElementById("barra").value += cif;
    } 
  }
function br(bor) {
  if (b) {
      document.getElementById("barra").value = bor;
  } 
}
function ig() {
    result = eval(aux.value);
    aux.value = result;
  
}
