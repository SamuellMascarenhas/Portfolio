const saibaMaisBtns = document.querySelectorAll('.saibaMaisBtn');
const modais = document.querySelectorAll('.modal');
const fecharModais = document.querySelectorAll('.close');

saibaMaisBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modais[index].style.display = 'block';
    });

    fecharModais[index].addEventListener('click', () => {
        modais[index].style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modais[index]) {
            modais[index].style.display = 'none';
        }
    });
});
