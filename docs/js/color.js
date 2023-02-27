const color = document.querySelector('#color');
const codigo = document.querySelector('#codigo');
const salida = document.querySelector('#salida')

/* localStorage.setItem("colorValue","#ffffff"); */
const almacenamiento = localStorage.getItem('colorValue') || "#ffffff";
color.value = almacenamiento;

const setColor = () => {
    const valor = color.value;
    codigo.innerHTML = valor;
    salida.style.background = valor;
}

setColor();

const saveColor = (valor) => {
    localStorage.setItem('colorValue',valor);
}

color.addEventListener("input",setColor);

color.addEventListener("change", ()=>{
    saveColor(color.value);
});
