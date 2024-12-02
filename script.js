document.getElementById('toggle-mode').addEventListener('click', () => {
    const body = document.body;
    if (body.classList.contains('desktop')) {
        body.classList.remove('desktop');
        body.classList.add('smartphone');
    } else {
        body.classList.remove('smartphone');
        body.classList.add('desktop');
    }
});
