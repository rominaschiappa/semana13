document.addEventListener('DOMContentLoaded', () => {
    const temaInput = document.getElementById('temaInput');
    const listaTemas = document.getElementById('listaTemas');

    document.getElementById('agregarTema').addEventListener('click', () => {
        const tema = temaInput.value.trim();
        if (tema !== '') {
            fetch('https://picsum.photos/200/200')
                .then(response => response.url)
                .then(imagenURL => {
                    const listItem = createListItem(tema, imagenURL);
                    listaTemas.appendChild(listItem);
                    temaInput.value = '';
                });
        }
    });

    listaTemas.addEventListener('click', (event) => {
        if (event.target.classList.contains('eliminar')) {
            listaTemas.removeChild(event.target.parentElement);
        }
    });

    function createListItem(tema, imagenURL) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${imagenURL}" alt="${tema}">
            <span>${tema}</span>
            <button class="eliminar">Eliminar</button>
        `;
        return listItem;
    }
});
