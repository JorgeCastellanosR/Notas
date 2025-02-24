const identificadorInput = document.getElementById('identificador');
    const buscarBoton = document.getElementById('buscar');
    const resultadosDiv = document.getElementById('resultados');

    buscarBoton.addEventListener('click', () => {
        const identificador = identificadorInput.value;
        fetch('notas.csv') // Reemplaza 'notas.csv' con el nombre de tu archivo
            .then(response => response.text())
            .then(data => {
                const filas = data.split('\n');
                let notaEncontrada = false;

                for (let fila of filas) {
                    const columnas = fila.split(',');
                    if (columnas[0] === identificador) {
                        resultadosDiv.innerHTML = `
                            <p>Nota 1: ${columnas[1]}</p>
                            <p>Nota 2: ${columnas[2]}</p>
                            <p>Nota 3: ${columnas[3]}</p>
                            <p>Nota 4: ${columnas[4]}</p>
                        `;
                        notaEncontrada = true;
                        break;
                    }
                }

                if (!notaEncontrada) {
                    resultadosDiv.innerHTML = '<p>Identificador no encontrado.</p>';
                }
            });
    });