document.querySelector('.submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default button action

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (email === '' || password === '') {
        alert('Please fill in both fields');
        return;
    }
    
    if (email === 'user@example.com' && password === '123456') {
        window.location.href = 'bank.html'; // Redirect to bank.html on successful login
    } else {
        alert('Invalid email or password. Try: user@example.com and pass: 123456 ');
    }
});
