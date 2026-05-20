let idea = document.getElementById('idea');
let btn = document.getElementById('btnAgregar');
let listaNotas = document.getElementById('listaNotas');

//%todo task 3. Agregar notas al DOM:
btn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(idea.value.trim());

    if (idea.value.trim() === '') {
        alert('Por favor, escribe una idea.');
        return;
    } else {
        // Create new list item
        listaNotas.style.display = 'flex';
        let li = document.createElement('li');
        li.classList.add('idea-item');
        li.innerHTML = `<div class="idea-content">
        <p>${idea.value}</p>
        <button class="btn-eliminar">Eliminar</button>
        </div>
        ` //utilice el innerHTML para crear el contenido del elemento li, aunque me hayan pedido.textContent preferi usar el otro para mejoras visuales
        console.log(li); //? Imprime en consola que se agregó la nota.

        //%todo task 4. Eliminar notas del DOM:
        let btnEliminar = li.querySelector('.btn-eliminar');
        btnEliminar.addEventListener('click', function () {
            listaNotas.removeChild(li);
            console.log(`la lista quedo asi: ${listaNotas.innerHTML}`);
        });
        listaNotas.appendChild(li);
        
        
        idea.value = '';
    }
})