const color = document.querySelector('#color');
const codigo = document.querySelector('#codigo');
const salida = document.querySelector('#salida')


color.addEventListener("input", ()=>{
    const valor = color.value;
    codigo.innerHTML = valor;
    salida.style.background = valor;
})