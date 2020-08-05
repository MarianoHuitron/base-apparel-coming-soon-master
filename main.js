document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("button");

    button.addEventListener('click', (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const text = document.getElementById('text-response');
        var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if(regex.test(email)) {
            text.classList.remove('error');
            text.innerText = 'Email Registred';
        } else {
            text.classList.add('error');
            text.innerHTML = `<img src="./images/icon-error.svg" width="18" hight="18"> Invalid email`;
        }
    });
    

});