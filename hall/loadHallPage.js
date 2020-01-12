var d1 = $.Deferred();


$.when(d1).done(function () {
    getBusySeats();
});


function getBusySeats() {
    var idScreen = getAllUrlParams(window.location.href).id_screen;
    var x = [];
    (async () => {
        const resp = await fetch("http://localhost:8080/tickets/?id_screen=" + idScreen);
        var j_old = 0;
        const json = await resp.json();

        for (var i = 0; i < json.length; i++) {
            x.push(json[i].chair);
        }

        var countSeats = sessionStorage["capacity"];
        let countRows = countSeats / 10 + 1;

        for (var i = 1; i < countRows; i++) {
            var cell = "";
            for (var j = j_old + 1, k = 0; k < 10; j++, k++) {
                var stateOfSeat = parseInt(document.getElementById(j).innerText);
                if (x.indexOf(stateOfSeat)>=0) {
                    console.log(j);
                    document.getElementById(j).parentNode.innerText = "ЗАНЯТО";
                }
                j_old = j;
            }
        }
    })();



}

function loadHall() {
    var content = [];
    xhr = new XMLHttpRequest();
    var idHall = getAllUrlParams(window.location.href).id;
    var idScreen = getAllUrlParams(window.location.href).id_screen;


    xhr.open('GET', 'http://localhost:8080/halls/' + idHall + "?id_screen=" + idScreen);
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            content = JSON.parse(xhr.responseText);
            d1.resolve();
            var titleHall = content.hall.title;
            var countSeats = content.hall.capacity;
            var dateTime = new Date(content.dateTime);
            let countRows = countSeats / 10 + 1;

            var minutes = (dateTime.getMinutes()<10?'0':'') + dateTime.getMinutes();
            sessionStorage["capacity"] = countSeats;

            content = JSON.parse(xhr.responseText);

            document.getElementById('hallName').innerText += titleHall
                + "\n По сеансу в " + formatDate(dateTime) + " " + dateTime.getHours() + ":" + minutes +
            "\n Фильм : " + content.film.title;


            var j_old = 0;
            for (var i = 1; i < countRows; i++) {
                var cell = "";
                for (var j = j_old + 1, k = 0; k < 10; j++, k++) {

                    cell += "<td> <a id='" + j + "' type=button data-toggle=modal data-target=#buy_ticket onclick=sessionStorage.seat=" + j + ";>" + j + "</a></td>";

                    j_old = j;
                }

                document.getElementById('hallTable').innerHTML +=
                    "<tr>" + cell + "</tr>";
            }


        }


    });
    xhr.setRequestHeader('Content-Type', 'application/json');
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


function WaitSync(callback) {


    var completeCount = 0;
    var flags = {};

    // task return values will be stored here
    // and will be passed to callback as argument
    var buffer = {
        'order': [],
        'groupOrder': [],
        'data': {}
    };
    var wrapOne = function (task, ctx) {
        // remember in which order did we come in
        var whoAmI = completeCount;

        // add count
        completeCount++;
        var iAmDone = false;

        return function () {

            // proxy, buffer
            var tmp = task.apply(ctx, arguments);

            // log the result
            buffer.order.push(whoAmI);

            // just returns result if the same task called twice
            // actually it means your design needs some refactoring
            if (iAmDone)
                return tmp;

            // is it time to call back? :)
            completeCount--;

            iAmDone = true;

            if (completeCount === 0)
                callback(buffer);

            return tmp;
        }

    };

    var wrapGroup = function (groupName, task, ctx) {

        // if not created earlier
        if (flags[groupName] !== false) {
            // set task group uncomplete
            flags[groupName] = false;
            completeCount++;
        }

        // to prevent doubletriggerring (actually not necessary here)
        var iAmDone = false;

        return function () {
            var tmp = task.apply(ctx, arguments);


            // same as in wrap... just return result if called twice
            if (iAmDone)
                return tmp;

            // only if group is not done
            if (!flags[groupName]) {
                completeCount--;
                flags[groupName] = true;

                // log result:
                buffer.order.push(groupName);
                buffer.groupOrder.push(groupName);
                buffer.data[groupName] = tmp;

                // is it time?
                if (completeCount === 0)
                    callback(buffer);
            }

            return tmp;
        }
    };


    this.wrap = function () {
        var call = wrapOne;

        if (!(arguments[0] instanceof Function) && (arguments[1] instanceof Function))
            call = wrapGroup;

        return call.apply(this, arguments);
    }
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
