function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example of checking username and password
    if (username === 'cert' && password === 'tajneHeslo') {
        // Successful login
        Swal.fire({
            icon: 'success',
            title: 'Úspěch',
            text: 'Úspěšně jste se přihlásili. Přejděte na: https://jakub517.github.io/certova-zranice-2/',
            //confirmButtonText: 'Přejít na stránku',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'https://jakub517.github.io/certova-zranice-2/'; // Změňte na adresu cílové stránky
            }
        });
    } else {
        // Failed login
        Swal.fire({
            icon: 'error',
            title: 'Chyba',
            text: 'Zadali jste nesprávné údaje. Zkontrolujte své jméno a heslo.',
        });
    }
}
