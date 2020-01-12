function update_user() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.Authorization);

    const firstName = document.getElementById("firstName-form").value;
    const lastName = document.getElementById("lastName-form").value;
    const birthDate = document.getElementById("date").value;
    const telephone = document.getElementById("telephone-form").value;
    const email = document.getElementById("email-form").value;
    var raw = JSON.stringify({
        "id": parseInt(localStorage["id"]),
        "firstName": firstName,
        "lastName": lastName,
        "birthDate": birthDate,
        "telephone": telephone,
        "password": localStorage["password"],
        "login": localStorage["login"],
        "role": localStorage["role"],
        "money": parseFloat(localStorage["money"]),
        "email": email
    });

    localStorage['firstName'] = firstName;
    localStorage['lastName'] = lastName;
    localStorage['telephone'] = telephone;
    localStorage['birthDate'] = birthDate;
    localStorage['email'] = email;

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/users", requestOptions)
        .then(response => response.text())
        .then(result => alert("Изменения вступили в силу"))
        .catch(error => alert('Ошибка' + error));
}


function addMoney() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.Authorization);

    var raw = JSON.stringify({
        "id": localStorage.id,
        "firstName": localStorage["firstName"],
        "lastName": localStorage["lastName"],
        "birthDate": localStorage["birthDate"],
        "telephone": localStorage["telephone"],
        "password": localStorage["password"],
        "login": localStorage["login"],
        "role": localStorage["role"],
        "money": parseFloat(localStorage["money"]) + 300,
        "email": localStorage["email"]
    });

    localStorage['money'] = parseFloat(localStorage['money']) + parseFloat(300);
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/users", requestOptions)
        .then(response => response.text())
        .then(result => alert("Изменения вступили в силу"))
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
            let content = JSON.parse(xhr_user.responseText);
            document.getElementById('greeting').innerText += content["firstName"];
            document.getElementById('userFirstName').innerText += content["firstName"];
            document.getElementById('userLastName').innerText += content["lastName"];
            document.getElementById('birthDate').innerText += content["birthDate"];
            document.getElementById('money').innerText += Math.floor(parseFloat(content["money"]) * 100) / 100;
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
            console.log(localStorage.Authorization);
            console.log(content);
            for (var i = 0; i < content.length; i++) {


                var filmTitle = content[i].screen.film.title;
                var firstName = content[i].user.firstName;
                var lastName = content[i].user.lastName;
                var dateScreen = new Date(content[i].screen.dateTime);
                var price = content[i].screen.price;
                var hallName = content[i].screen.hall.title;
                var chair = content[i].chair;

                var minutes = (dateScreen.getMinutes() < 10 ? '0' : '') + dateScreen.getMinutes();
                document.getElementById("userBasket").innerHTML += "" +


                    "<div class='thumbnail' style='background: #f5f5f5; border: 2px solid #bbaeff;'>" +
                    "<div class='caption'> " +
                    "<h2>" + filmTitle + "</h2>" +
                    "<h3>Имя :  " + firstName + " Фамилия : " + lastName + "</h3>" +
                    "<h3>Время и дата :  " + formatDate(dateScreen) + " " + dateScreen.getHours() + ":" + minutes + "</h3>" +
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


function formatDate(date) {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}
