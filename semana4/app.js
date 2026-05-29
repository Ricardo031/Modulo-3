//todo task 2. Captura e interacción con el usuario:
let tarea = document.getElementById('tarea');
let btn = document.getElementById('btnAgregar');
let listaTareas = document.getElementById('listaTareas');


//todo task 3. Manipulación dinámica del DOM:
btn.addEventListener('click', function (event) {
    event.preventDefault();

    const textoTarea = tarea.value.trim();

    if (textoTarea === '') {
        alert('Por favor, escribe una tarea.');
        return;
    } else {
        const tareasGuardadas = obtenerTareas();
        tareasGuardadas.push(textoTarea);
        guardarTareas(tareasGuardadas);
        mostrarTareas();
        tarea.value = '';
    }

});

//todo task 4. Persistencia de datos:

function obtenerTareas() {
    return JSON.parse(localStorage.getItem('tareas')) || [];
}

function guardarTareas(tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

console.log(obtenerTareas());

function mostrarTareas() {
    let valores = obtenerTareas();
    listaTareas.innerHTML = '';
    if (valores.length === 0) {
        listaTareas.style.display = 'none';
        return;
    }

    listaTareas.style.display = 'flex';
    valores.forEach((valor, indice) => {
        let li = document.createElement('li');
        li.classList.add('tarea-item');
        li.innerHTML = `<div class="tarea-content"> 
        <p>${valor}</p>
        <button class="btn-eliminar">Eliminar</button>
        </div>`;

        let btnEliminar = li.querySelector('.btn-eliminar');
        btnEliminar.addEventListener('click', function () {

            listaTareas.removeChild(li);



            const tareasActualizadas = valores.filter((_, i) => i !== indice);


            if (tareasActualizadas.length === 0) {
                localStorage.removeItem('tareas');
            } else {
                guardarTareas(tareasActualizadas);
            }


            mostrarTareas();
        });

        listaTareas.appendChild(li);
    });
}

mostrarTareas()


