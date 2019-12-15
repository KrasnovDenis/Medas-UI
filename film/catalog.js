function loadFilms() {
    var content = [];
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/films');
    xhr.setRequestHeader('Authorization',localStorage.Authorization);
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            content = JSON.parse(xhr.responseText);
            for (var i = 0; i < content.length; i++) {
                console.log(content[i]);
                var poster = content[i]['poster'];
                var duration = content[i]['duration'];
                var title = content[i]['title'];
                var idFilm = content[i]['id'];
                document.getElementById('catalogFilms').innerHTML += "" +
                    "<div class='col-sm-6 col-md-4 col-lg-2'>" +
                    "<div class='thumbnail'>" +
                    "<img src= " + poster + "  alt='логотип фильма'>" +
                    "<div class='caption'> " +
                    "<h3>" + title + "</h3>" +
                    "<p>Длительность " + duration + " минут</p>" +
                    "<a href= ../film/film.php?id=" + idFilm+" class='btn btn-default'  role='button'>Описание</a>" +
                    "</div>" +
                    "</div>" +
                    "</div>";

            }
        }
    });
    xhr.setRequestHeader('Content-Type', 'applicaton/json');
    xhr.send();


}