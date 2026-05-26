let idea = document.getElementById('idea');
let btn = document.getElementById('btnAgregar');
let listaNotas = document.getElementById('listaNotas');

function obtenerIdeas() {
    return JSON.parse(localStorage.getItem('ideas')) || [];
}

function guardarIdeas(ideas) {
    localStorage.setItem('ideas', JSON.stringify(ideas));
}

console.log(obtenerIdeas());


//%todo task 3. Agregar notas al DOM:
btn.addEventListener('click', function (event) {
    event.preventDefault();

    const textoIdea = idea.value.trim();

    if (textoIdea === '') {
        alert('Por favor, escribe una idea.');
        return;
    }else{
        const ideasGuardadas = obtenerIdeas();
        ideasGuardadas.push(textoIdea);
        guardarIdeas(ideasGuardadas);
        mostrarNotas();
        idea.value = '';
    }
});

function mostrarNotas() {
    let valores = obtenerIdeas();
    listaNotas.innerHTML = '';
    if (valores.length === 0) {
        listaNotas.style.display = 'none';
        return;
    }

        listaNotas.style.display = 'flex'; // Mostrar la lista de notas si hay ideas guardadas. cuando hay mas de 0 ideas guardada.
        
        valores.forEach(function (valor, indice) {
        let li = document.createElement('li');
        li.classList.add('idea-item');
        li.innerHTML = `<div class="idea-content">
        <p>${valor}</p>
        <button class="btn-eliminar">Eliminar</button>
        </div>`;

        let btnEliminar = li.querySelector('.btn-eliminar');
        btnEliminar.addEventListener('click', function () {
            const ideasActualizadas = valores.filter(function (_, i) {
                return i !== indice;
            });

            guardarIdeas(ideasActualizadas);
            mostrarNotas();
        });

        listaNotas.appendChild(li);
    });
}

mostrarNotas() // Mostrar notas al cargar la página. esto es indispensable para que se muestren las ideas guardadas al momento de iniciar la pag.


