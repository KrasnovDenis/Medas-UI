function create_user() {

}

function update_user() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.Authorization);

    var raw = JSON.stringify({
        "id": parseInt(localStorage["id"]),
        "firstName": document.getElementById("firstName-form").value,
        "lastName": document.getElementById("lastName-form").value,
        "birthDate": document.getElementById("date").value,
        "telephone": localStorage["telephone"],
        "password": localStorage["password"],
        "login": document.getElementById("login-form-change").value,
        "role": localStorage["role"],
        "money": localStorage["money"],
        "email": document.getElementById("email-form").value
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    console.log(raw);
    fetch("http://localhost:8080/users", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => alert('Ошибка' + error));
}


function addMoney() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.Authorization);

    var raw = JSON.stringify({
        "id": 7,
        "firstName": localStorage["firstName"],
        "lastName": localStorage["lastName"],
        "birthDate": localStorage["birthDate"],
        "telephone": localStorage["telephone"],
        "password": localStorage["password"],
        "login": localStorage["login"],
        "role": localStorage["role"],
        "money": 1900,
        "email": localStorage["email"]
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/users", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => alert('Ошибка' + error));
}

function loadUserPage() {
    if (!localStorage.Authorization)
        window.location.replace("http://urbas");


    var xhr_user = new XMLHttpRequest();
    xhr_user.open('GET', 'http://localhost:8080/users/' + localStorage.id);
    xhr_user.setRequestHeader('Authorization', localStorage.Authorization);
    xhr_user.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var content = JSON.parse(xhr_user.responseText);
            document.getElementById('greeting').innerText += content["firstName"];
            document.getElementById('userFirstName').innerText += content["firstName"];
            document.getElementById('userLastName').innerText += content["lastName"];
            document.getElementById('birthDate').innerText += content["birthDate"];
            document.getElementById('money').innerText += content["money"];
        }
    });
    xhr_user.setRequestHeader('Content-Type', 'applicaton/json');
    xhr_user.send();


    var content = [];


    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/tickets/' + localStorage.id);

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            content = JSON.parse(xhr.responseText);
            for (var i = 0; i < content.length; i++) {
                console.log(content);

                var filmTitle = content[i].screen.film.title;
                var firstName = content[i].user.firstName;
                var lastName = content[i].user.lastName;
                var dateScreen = content[i].screen.dateTime;
                var price = content[i].screen.price;
                var hallName = content[i].screen.hall.title;
                var chair = content[i].chair;

                document.getElementById("userBasket").innerHTML += "" +

                    "<div class='thumbnail'>" +
                    "<div class='caption'> " +
                    "<h2>" + filmTitle + "</h2>" +
                    "<h3>Имя :  " + firstName + " Фамилия : " + lastName + "</h3>" +
                    "<h3>Время и дата :  " + dateScreen + "</h3>" +
                    "<p>Зал : " + hallName + " </p>" +
                    "<p>Место № " + chair + "</p>" +
                    "<p>Цена :" + price + "</p>" +
                    "</div>" +
                    "</div>";
                ;
            }
        }


    });
    xhr.setRequestHeader('Authorization', localStorage.Authorization);
    xhr.setRequestHeader('Content-Type', 'applicaton/json');
    xhr.send();

}