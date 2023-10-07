const lerMaisButton = document.getElementById('lerMais');
        const restoText = document.getElementById('resto');

        lerMaisButton.addEventListener('click', () => {
            if (restoText.style.display === 'none' || restoText.style.display === '') {
                restoText.style.display = 'block';
                lerMaisButton.innerHTML = 'Mostrar Menos';
            } else {
                restoText.style.display = 'none';
                lerMaisButton.innerHTML = 'Ler Mais';
            }
        });