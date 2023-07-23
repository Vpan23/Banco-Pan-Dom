const AbrirCuenta = document.getElementById('btn-abrirCuenta');
const Formulario = document.getElementById('container');
const CerrarCuenta = document.getElementById('close-tag');
const Overlay = document.getElementById('overlay');
const Submit = document.getElementById('submit');
const Menu1 = document.getElementById('menu-1');
const Menu2 = document.getElementById('menu-2');
const navbarResponsive = document.getElementById('navbar-responsive');



AbrirCuenta.addEventListener('click', () => {
    Formulario.style.display = 'block';
    Overlay.style.display = 'block';
    console.log('1')
})
CerrarCuenta.addEventListener('click',() => {
    Formulario.style.display = 'none';
    Overlay.style.display = 'none';
    console.log('2');
})
Submit.addEventListener('click', () => {
    alert('Datos Subidos Correctamente!');
    console.log('Datos Subidos Correctamente!');
    Formulario.style.display = 'none';
    Overlay.style.display = 'none';
})
Menu1.addEventListener('click', ()=> {
    Menu1.style.display = 'none';
    Menu2.style.display = 'block';
    navbarResponsive.style.display = 'flex';
})
Menu2.addEventListener('click', ()=> {
    Menu2.style.display = 'none';
    Menu1.style.display = 'block';
    navbarResponsive.style.display = 'none'
})