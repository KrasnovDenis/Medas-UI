function registration() {

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dateBirth = document.getElementById('dateBirth').value;

    if (!(username || password)) {
        alert("Неверно введены данные");
        return;
    }

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
    }) .then(response => response.text())
        .then(function (data) {
        if (data.includes('"id":0')){
            alert("Пользователь с таким логином существует");
        }
    });

    return false;
}

