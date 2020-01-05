<html>
<?php
require '../head.php';
?>


<body onload="return loadFilm();">

<?php
require '../menu.php';
?>


<div id = "filmDesc" class='container'>
    <div class='row'>
        <div class='col-lg-3'>
            <img id="poster" scr="" width="250px" height="300px" class="film_picture" alt='picture'>


        </div>


        <div class='col-lg-4'>
            <h1 id="title" class = "film_title"></h1>
            <h3 id="duration" class = "film_slogan">Длительность : </h3>
            <h3>Оценка : <h1 id="rating" style="color:#FFFF00"></h1> из 5</h3>

            <ul class='list-group ' style='width:300px'>

                <li id="director" class='list-group-item pull-right film_director'>Режиссер :</li>
                <li id="producer" class='list-group-item pull-right film_producer'>Продюссер :</li>
            </ul>

        </div>


    </div>


    <div class='row'></div>

</div>


<?php
require('../footer.php');
?>
</body>

</html>
