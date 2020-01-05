function loadSchedule() {


    var raw_content = fetch('http://localhost:8080/screen').then(a=>a.json());
    var content = raw_content.then(r => content = r);
    console.log(content.length);
    content.then(function (r) {
        for(var i = 0; i < 17; i++) {
            var poster = r[i].film.poster;
            var duration =r[i].film.duration;
            var hallTitle =r[i].hall.title;
            var filmtitle =r[i].film.title;
            var screenPrice =r[i].price;
            var screenDateTime =r[i].dateTime;
            var filmRating =r[i].film.rating;
            var id_hall =r[i].hall.id;
            var id_screen =r[i].id;

            document.getElementById('catalogFilms').innerHTML += "" +
                "<div>" +
                "<div class='image' >" +
                "<img src=" + poster + " width = '250px;' height='300px;' >" +
                "</div>" +
                "<div class='about'>" +
                "<h2>Дата: " + screenDateTime + "</h2>" +
                "<h1>" + filmtitle + "</h1>" +
                "<h3>" + duration + " минут</h3>" +
                "<h3>" + hallTitle + "</h3>" +
                "<p>Цена: " + screenPrice + "</p>" +
                "<p>" + filmRating + "☆ из 5 </p>" +
                " <p> <a href= ../hall/hall.php?id=" + id_hall + "&id_screen=" + id_screen + " class='btn btn-primary' role='button'>Купить билет</a> </p>" +
                "</div>" +
                "</div>";

        }
    });



}