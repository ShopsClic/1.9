let nombre, contraseña;


let formulario = document.querySelector('#iniciar')
let formulario2 = document.querySelector('#modal')
//modal
let cliente, empresario;


const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const modal_container2 = document.getElementById('modal_container2');
const close = document.getElementById('close');
let perfil;


formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerDatos()
})

formulario2.addEventListener('submit', (e) => {
    e.preventDefault()
    perfil = document.getElementById('perfil').value
    ListarDatos2(perfil)
})

function LeerDatos() {
    nombre = document.getElementById('name').value
    contraseña = document.getElementById('password').value
  
    ValidarDatos(nombre, contraseña)

}



function ValidarDatos(nombre, contraseña) {
    if (nombre.length == 0 || contraseña.length == 0) {
    }

    ListarDatos(nombre, contraseña)

}



function ListarDatos(nombre, contraseña) {
    let nombreUs = localStorage.getItem('Nombre')
    let contraseñaUs = localStorage.getItem('Contraseña')

    if (nombre === nombreUs && contraseña === contraseñaUs) {
        open.addEventListener('click', () => {
            modal_container.classList.add('show');
        });

        close.addEventListener('click', () => {
            modal_container.classList.remove('show');
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: '¡Algo salió mal!',
        })
    }
}



function ListarDatos2(perfil) {
   
   
    if (perfil == "cliente") {
        window.location.href=('../CATEGORIAS/hoteles.html')
    } 

    if (perfil == "empresario") {
        window.location.href=('../')
    }
}

