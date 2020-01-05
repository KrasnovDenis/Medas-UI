function loadFilm() {
    var content = [];


    xhr = new XMLHttpRequest();
    var filmId =getAllUrlParams(window.location.href).id;
    xhr.open('GET', 'http://localhost:8080/films/' + filmId);
    xhr.setRequestHeader('Authorization',localStorage.Authorization);
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            content = JSON.parse(xhr.responseText);
            console.log(content);
            var poster = content['poster'];
            var duration = content['duration'];
            var title = content['title'];
            var director = content['director'];
            var producer = content['producer'];
            var rating = content['rating'];

            document.getElementById('duration').innerText += duration;
            document.getElementById('title').innerText += title;
            document.getElementById('director').innerText += director;
            document.getElementById('producer').innerText += producer;
            document.getElementById('poster').src += poster;
            document.getElementById('rating').innerText += rating;




        }
    });
    xhr.setRequestHeader('Content-Type', 'applicaton/json');
    xhr.send();




}

function getAllUrlParams(url) {

    // извлекаем строку из URL или объекта window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // объект для хранения параметров
    var obj = {};

    // если есть строка запроса
    if (queryString) {

        // данные после знака # будут опущены
        queryString = queryString.split('#')[0];

        // разделяем параметры
        var arr = queryString.split('&');

        for (var i=0; i<arr.length; i++) {
            // разделяем параметр на ключ => значение
            var a = arr[i].split('=');

            // обработка данных вида: list[]=thing1&list[]=thing2
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function(v) {
                paramNum = v.slice(1,-1);
                return '';
            });

            // передача значения параметра ('true' если значение не задано)
            var paramValue = typeof(a[1])==='undefined' ? true : a[1];

            // преобразование регистра
            paramName = paramName.toLowerCase();
            paramValue = paramValue.toLowerCase();

            // если ключ параметра уже задан
            if (obj[paramName]) {
                // преобразуем текущее значение в массив
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                // если не задан индекс...
                if (typeof paramNum === 'undefined') {
                    // помещаем значение в конец массива
                    obj[paramName].push(paramValue);
                }
                // если индекс задан...
                else {
                    // размещаем элемент по заданному индексу
                    obj[paramName][paramNum] = paramValue;
                }
            }
            // если параметр не задан, делаем это вручную
            else {
                obj[paramName] = paramValue;
            }
        }
    }

    return obj;
}