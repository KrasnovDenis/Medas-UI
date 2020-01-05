function loadHall() {
    var content = [];
    xhr = new XMLHttpRequest();
    var idHall = getAllUrlParams(window.location.href).id;
    var idScreen = getAllUrlParams(window.location.href).id_screen;

    xhr.open('GET', 'http://localhost:8080/halls/' + idHall + "?id_screen=" + idScreen);
    xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                content = JSON.parse(xhr.responseText);
                console.log(content);

                console.log(content.hall.title);
                var titleHall = content.hall.title;
                var countSeats = content.hall.capacity;
                var dateTime = content.dateTime;


                let countRows = countSeats / 10 + 1;

                document.getElementById('hallName').innerText += titleHall
                    + " По сеансу в " + dateTime;

                var j_old = 0;

                for (var i = 1; i < countRows; i++) {
                    var cell = "";
                    for (var j = j_old + 1, k = 0; k < 10; j++, k++) {

                        cell += "<td> <a type=button data-toggle=modal data-target=#buy_ticket onclick=sessionStorage.seat=" + j + ";>" + j + "</a></td>";

                        j_old = j;
                    }

                    document.getElementById('hallTable').innerHTML +=
                        "<tr>" + cell + "</tr>";
                }


            }

        }
    )
    ;
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

        for (var i = 0; i < arr.length; i++) {
            // разделяем параметр на ключ => значение
            var a = arr[i].split('=');

            // обработка данных вида: list[]=thing1&list[]=thing2
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function (v) {
                paramNum = v.slice(1, -1);
                return '';
            });

            // передача значения параметра ('true' если значение не задано)
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

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