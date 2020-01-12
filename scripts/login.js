function login() {

    const username = document.getElementById('loginLogin').value;
    const password = document.getElementById('loginPassword').value;

    if (!(username || password)) {
        alert("Введите имя и пароль!");
        return false;
    }

    var contextResponse = "";

    var body = JSON.stringify({'username': username, 'password': password});
    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/login');
    xhr.addEventListener("readystatechange", function () {

        if (this.readyState === 4) {
            if (xhr.status == 404) {
                alert("Неверные логин или пароль");
                return false;

            }
            contextResponse = JSON.parse(xhr.responseText);

            for (var key in contextResponse) {
                if (contextResponse[key] != null) {
                    console.log(key + '===' + contextResponse[key]);
                    localStorage.setItem(key.toString(), contextResponse[key].toString());
                }
            }
            f(username, password);
        }

    });
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(body);


    return false;
}


function f(username, password) {
    if (localStorage.login != undefined) {

        localStorage.Authorization = "Basic " + btoa(username + ':' + password);

        localStorage.setItem("Login", "successful");

        window.location.replace("/user/account.php");
    }

}