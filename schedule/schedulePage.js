function loadSchedule() {
    var content = [];
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/screen');
    xhr.setRequestHeader('Authorization', localStorage.Authorization);
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            content = JSON.parse(xhr.responseText);
            for (var i = 0; i < content.length; i++) {

                var poster = content[i]['filmPoster'];
                var duration = content[i]['filmDuration'];
                var hallTitle = content[i]['hallTitle'];
                var filmtitle = content[i]['filmtitle'];
                var screenPrice = content[i]['screenPrice'];
                var screenDateTime = content[i]['screenDateTime'];
                var filmRating = content[i]['filmRating'];
                var id_hall = content[i]['idHall'];
                var id_screen = content[i]['idScreen'];

                document.getElementById('catalogFilms').innerHTML += "" +
                    "<div>" +
                    "<div class='image' >" +
                    "<img src=" + poster + " width = '250px;' height='300px;' >" +
                    "</div>" +
                    "<div class='about'>" +
                    "<h2>Дата: " + screenDateTime+"</h2>" +
                    "<h1>" + filmtitle + "</h1>" +
                    "<h3>" + duration + " минут</h3>" +
                    "<h3>"+hallTitle+"</h3>" +
                    "<p>Цена: " + screenPrice + "</p>" +
                    "<p>" + filmRating + "☆ из 5 </p>" +
                     " <p> <a href= ../hall/hall.php?id="+id_hall+"&id_screen="+id_screen+" class='btn btn-primary' role='button'>Купить билет</a> </p>" +
                    "</div>" +
                    "</div>";

            }
        }
    });
    xhr.setRequestHeader('Content-Type', 'applicaton/json');
    xhr.send();


}