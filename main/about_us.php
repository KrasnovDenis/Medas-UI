<html>
<?php
require '../head.php';
?>


<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50">

<?php
require '../menu.php';
?>

<!--      начало карты и описания-->
<div class=" container-fluid ">
    <div class="row">
        <div class="col-lg-5 col-sm-12">
            <iframe class="map" id="googleMap"
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3999.882025560217!2d30.429962874364037!3d59.91652630571409!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1540937810178"
                    width="550" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>

        <div class="history col-lg-7 col-sm-12">
            <h2> История Компании</h2>
            <h1>Наш кинотеатр зародился в 90е</h1>
            <p class="textHistory">
            <h3>Когда еще не было этих ваших интернетов.</h3>

            В восьмидесятые билет в цивильный кинотеатр стоил от 10 копеек на детский сеанс до 50 копеек на взрослый в
            вечернее время. Но в подвальном кинозале со стульями, видеоплеером и телевизором «Берёзка» с экраном 20-25
            дюймов, были такие цены:

            1 рубль — стандартный (дневной) фильм
            50 коп — мультфильмы («Том и Джерри», «Дональд Дак»)
            1,5 руб. — «эротика» (Эммануэль, «Греческая смоковница»). Вечерние сеансы (после 22,00), детей не пускали.


            </p>
        </div>
    </div>
</div>
<!--      конец карты и описания-->


<hr>
<hr>


<?php
require '../footer.php';
?>

</body>

</html>