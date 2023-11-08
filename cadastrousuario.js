async function register() {
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('senha');

    await fetch(
        'http://localhost:3000/api/auth/register', 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'email': emailField.value,
                'password': passwordField.value, 
            }),
        });
}