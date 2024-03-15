/* 
DOM = Document Object Model
BOM = Browser Object Model


--- DOM Methods ----
getElementById('id') => devuelve el elemento con el id indicado
getElementsByClassName('class') => devuelve todos los elementos con la clase indicada
getElementsByTagName('tag') => devuelve todos los elementos con el nombre de etiqueta indicado
getElementsByName('name') => devuelve todos los elementos con el atributo name indicado


createElement('tag') => me permite crear un nuevo nodo html 
createTextNode('texto') => me permite crear texto


querySelector('selector')
querySelectorAll('selector')

*/
/* BOM */
//window.open("https://google.com")
/* let respuesta = confirm("Quieres ver google!")
if(respuesta){
    let nombre = prompt("Dame tu nombre")
    alert("Hola " + nombre);
}else{
    alert("Chao")
} */
/* DOM */
document.title = "Hola desde Javascript"
//document.body.style.backgroundColor = "red";
console.log(document.getElementById('home'))
console.log(document.getElementsByClassName('link'))

let links = document.getElementsByClassName('link');

for(let i = 0; i < links.length; i++){
    console.log(links[i])
}

let links2 = document.getElementsByTagName('a')

let genero = document.getElementsByName('genero')
console.log(genero)

for(let i = 1; i <= 6; i++){

    let div = document.createElement('div')
    div.id = "div"+i;
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.backgroundColor = getColor()
    div.style.margin = "2px"
    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'
    div.innerHTML = i

    
    document.body.appendChild(div)
}

let nav = document.getElementsByTagName('nav')[0];
let a = document.getElementsByTagName('a')[4];
console.log(nav.childNodes)
nav.removeChild(a)
console.log(nav.childNodes)

let texto = document.createTextNode("Hola Mundo");

function getColor(){
    let colores = ["red", "blue", "yellow", "green", "violet", "orange", "pink"]
    return colores[Math.floor(Math.random() * colores.length)]
}

let generos = document.querySelectorAll('input[name=genero]');
console.log(generos)



let div4 = document.querySelector('#div4');
div4.innerHTML = "cuatro"