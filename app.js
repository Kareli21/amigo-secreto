let nombreAmigo = [];

function agregarAmigo (){
let amigoSecreto = (document.getElementById('amigo').value);
console.log (amigoSecreto)
if (amigoSecreto ===""){
alert ("¿Estás seguro que tecleaste el nombre? 🤔");
} else {
      nombreAmigo.push (amigoSecreto);  
  console.log (nombreAmigo.length );
limpiarCaja();
mostrarListaAmigo ();

}

return;
}
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < nombreAmigo.length; index++) {
    const element = nombreAmigo[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}
  function limpiarCaja(){
  document.querySelector('#amigo').value = "";
}
function sortearAmigo() {
  let cantidadAmigos = nombreAmigo.length;
  if (cantidadAmigos === 0) {
    alert("¡Hey parece que olvidaste agregar el nombre de tus amigos antes de sortear! 🤭");
  } else {  
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    let item = document.createElement('li');
        item.innerText=("El amigo ganador es: "+nombreAmigo[indiceAmigo]);
        resultadoHTML.appendChild(item);
         nombreAmigo = [];   
        mostrarListaAmigo();      
  }
   setTimeout(() => {
    alert("El sorteo ha terminado. Si deseas iniciar de nuevo, actualiza la página 🔄");
  }, 1500);
}
