
function create_film(title, duration) {
  //  var title = document.getElementsByName()[0].value;
   // var duration = parseInt(document.getElementsByName('duration')[0].value);

    var data;

    if(title && duration) {
        fetch('/films',
            {method : 'POST', headers: {'Content-Type' : 'application/json',},
                body: JSON.stringify({duration: duration ,title: title})}).then(r => data = r);
    }
    else {
        console.log("Что то пошло не так");
    }
}
function update_film() {

}
function delete_film() {

}
function get_film() {

}