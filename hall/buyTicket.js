

function buyTicket() {

    if (!(localStorage.Authorization && sessionStorage.seat)) {
        document.getElementById('loginButton').click();
        return false;
    }


    var chairNumber = sessionStorage.seat;
    var userId = localStorage.id;
    var screenId = getAllUrlParams(window.location.href).id_screen;


    getJsonScreen(screenId);
    getJsonUser(userId);


    var body = JSON.stringify({
        "user": JSON.parse(sessionStorage.getItem("user")),
        "screen": JSON.parse(sessionStorage.getItem("screen")),
        "chair": chairNumber
    });

    var contextResponse = "";
    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/tickets');
    xhr.setRequestHeader('Authorization', localStorage.Authorization);
    xhr.setRequestHeader('Content-Type', 'application/json',);
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            contextResponse = JSON.parse(xhr.responseText);
            if (contextResponse['id']  == 0) {
                alert("Место занято, либо нет денях :С");
            } else {
                alert("Место успешно куплено");
            }
        }
    });

    xhr.send(body);

}

function getJsonUser(userId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/users/' + userId, false);
    xhr.setRequestHeader('Authorization', localStorage.Authorization);
    xhr.setRequestHeader('Content-Type', 'application/json',);
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            sessionStorage.setItem("user",xhr.responseText);
        }
    });

    xhr.send();

}

function getJsonScreen(screenId) {
    var xhrScreen = new XMLHttpRequest();
    xhrScreen.open('GET', 'http://localhost:8080/screen/' + screenId,false);
    xhrScreen.setRequestHeader('Authorization', localStorage.Authorization);
    xhrScreen.setRequestHeader('Content-Type', 'application/json',);
    xhrScreen.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
           sessionStorage.setItem("screen",xhrScreen.responseText);
        }
    });

    xhrScreen.send();

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