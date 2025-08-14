let boton = document.getElementById('mostrarOcultar');

let contenido = document.getElementById('contenido');

boton.addEventListener('click', function() {

    if (contenido.style.display === 'none') {

        contenido.style.display = 'block';  // Muestra el contenido

        boton.textContent = 'Ocultar contenido';

    } else {

        contenido.style.display = 'none';  // Oculta el contenido

        boton.textContent = 'Mostrar contenido';

    }

});