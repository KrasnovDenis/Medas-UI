function logout() {
    localStorage.clear();

    var body = JSON.stringify({'username': 'logout', 'password': 'logout'});
    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/login');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(body);

    alert("Вы вышли из системы!");
}