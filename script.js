/* primer paso */
let button = document.querySelector('button'); 
button.addEventListener('click', function(){
 alert('click sobre el botón');
});

button = $(`button`)
button.click(function(){
    alert('click sobre el botón');
})

/* segundo caso */
console.log($(`#titulo_1`))
console.log($(`#titulo_2`))
console.log($(`#texto_1`))

/* tercer caso */
let titulos = $(`.titulos`)

for (let i=0; i < titulos.length; i++){
    console.log(titulos[i])
}

/* cuarto caso */
let todos = $(`ul`).filter(`:Nested item`)
todos.css("color", "red");

/* quinto caso */

