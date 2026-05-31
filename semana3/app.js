let tarea = document.getElementById('tarea');
let btn = document.getElementById('btnAgregar');
let listaTareas = document.getElementById('listaTareas');

function obtenerTareas() {
    return JSON.parse(localStorage.getItem('tareas')) || [];
}

function guardarTareas(tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

console.log(obtenerTareas());


//todo task 3. Agregar notas al DOM:
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

function mostrarTareas() {
    let valores = obtenerTareas();
    listaTareas.innerHTML = '';
    if (valores.length === 0) {
        listaTareas.style.display = 'none';
        return;
    }

    listaTareas.style.display = 'flex'; // Mostrar la lista de tareas si hay tareas guardadas. cuando hay mas de 0 tareas guardada.
    valores.forEach((valor, indice) => {
        let li = document.createElement('li');
        li.classList.add('tarea-item');
        li.innerHTML = `<div class="tarea-content"> 
        <p>${valor}</p>
        <button class="btn-eliminar">Eliminar</button>
        </div>`;

        let btnEliminar = li.querySelector('.btn-eliminar');
        btnEliminar.addEventListener('click', function () {
            // 1. Usar removeChild para eliminar el elemento del DOM (Criterio de aceptación)
            listaTareas.removeChild(li);

            // 2. Filtrar las ideas para obtener el nuevo estado
            const ideasActualizadas = valores.filter((_, i) => i !== indice);

            // 3. Usar localStorage.removeItem() si ya no quedan ideas (Criterio de aceptación)
            if (tareasActualizadas.length === 0) {
                localStorage.removeItem('tareas');
            } else {
                guardarTareas(ideasActualizadas);
            }

            // 4. Refrescar la vista para sincronizar los índices de los elementos restantes
            mostrarTareas();
        });

        listaTareas.appendChild(li);
    });
}

mostrarTareas() // Mostrar notas al cargar la página. esto es indispensable para que se muestren las ideas guardadas al momento de iniciar la pag.


