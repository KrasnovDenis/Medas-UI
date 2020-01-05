function registration() {

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dateBirth = document.getElementById('loginLogin').value;

    if (!(username || password)) return;

    var body = JSON.stringify({
        'login': username,
        'password': password,
        'firstName': firstName,
        'email': email,
        'telephone': phone,
        'role' : "USER",
        'birthDate': dateBirth,
        'lastName': lastName
    });
    fetch('http://localhost:8080/registration', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: body
    });

    return false;
}

