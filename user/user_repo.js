function create_user() {

}

function update_user() {

}

function delete_user() {

}

function get_user(id) {
    var user;
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/users/' + id);
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            user = xhr.responseText
        }
    });
    xhr.setRequestHeader('Content-Type', 'applicaton/json');
    xhr.setRequestHeader('Authorization', localStorage.Authorization);

    xhr.send();


}

function loadUserPage() {
    if (localStorage.length < 1)
        window.location.replace("/urbas#");


    document.getElementById('greeting').innerText += localStorage["firstName"];
    document.getElementById('userFirstName').innerText += localStorage["firstName"];
    document.getElementById('userLastName').innerText += localStorage["lastName"];
    document.getElementById('birthDate').innerText += localStorage["birthDate"];
    document.getElementById('money').innerText += localStorage["money"];

    var content = [];


    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/tickets/' + localStorage.id);
    xhr.setRequestHeader('Authorization', localStorage.Authorization);
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            content = JSON.parse(xhr.responseText);
            for (var i = 0; i < content.length; i++) {

                var film = content[i]['film'];
                var firstName = content[i]['firstName'];
                var lastName = content[i]['lastName'];
                var dateScreen = content[i]['dateScreen'];
                var price = content[i]['price'];
                var hallName = content[i]['hallName'];
                var chair = content[i]['chair'];

                document.getElementById("userBasket").innerHTML += "" +

                    "<div class='thumbnail'>" +
                    "<div class='caption'> " +
                    "<h2>" + film + "</h2>" +
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

    xhr.setRequestHeader('Content-Type', 'applicaton/json');
    xhr.send();

}