

function loadAdminPage() {
    if (localStorage.role != "ADMIN") {
        alert("У вас нет доступа к этой странице");
        window.location.replace("http://urbas");
    }



    var content = "";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/films');
    xhr.setRequestHeader('Authorization', localStorage.Authorization);
    xhr.setRequestHeader('Content-Type', 'applicaton/json');
    xhr.addEventListener("readystatechange", function () {

            if (this.readyState === 4) {
                content = JSON.parse(xhr.responseText);
                for (var i = 0; i < content.length; i++) {

                    var titleFilm = content[i]['title'];
                    document.getElementById('filmSelect').innerHTML += "" +
                        "<option value="+ content[i]['id'] +"> " + titleFilm + "</option>"

                }
            }
        });
    xhr.send();

}


function addScreen() {
    var film = document.getElementById('filmSelect').value;
    var dateTimeFilm = document.getElementById('dateTimeFilm').value;
    var price = document.getElementById('price').value;
    var hall = document.getElementById('hallSelect').value;

    dateTimeFilm = new Date(dateTimeFilm).getTime();


    var body = JSON.stringify({
        "hall": {
            "id": hall
        },
        "film": {
            "id": film,
        },
        "dateTime": dateTimeFilm,
        "price": price
    });


    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/screen');
    xhr.setRequestHeader('Authorization', localStorage.Authorization);
    xhr.setRequestHeader('Content-Type', 'application/json',);
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (xhr.responseText == "") {
                alert("Не добавилось, произошла ошибка сервера");
            } else {
                alert("Вроде как добавилось");
            }
        }
    });

    xhr.send(body);

}


function removeFilm() {

}


function addFilm() {

    var duration = document.getElementById('duration').value;
    var poster = document.getElementById('poster').value;
    var title = document.getElementById('title').value;
    var director = document.getElementById('director').value;
    var producer = document.getElementById('producer').value;
    var rating = document.getElementById('rating').value;
    var count_review = document.getElementById('count_review').value;

    var body = JSON.stringify({
        "poster": poster,
        "duration": duration,
        "title": title,
        "director": director,
        "producer": producer,
        "rating": rating,
        "count_review": count_review
    });



    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/films');
    xhr.setRequestHeader('Authorization', localStorage.Authorization);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (xhr.responseText == "") {
                alert("Не добавилось, произошла ошибка сервера");
            } else {
                alert("Вроде как добавилось");
            }
        }
    });

    xhr.send(body);

}

function removeScreen() {

}


function updateScreen() {

}


function updateFilm() {

}

