<!DOCTYPE html>
<html lang="en">
<?php
require '../head.php';
?>
<link rel="stylesheet" type="text/css" href="../schedule/ScheduleStyle.css">

<body id="myPage" onload="loadSchedule();" data-spy="scroll" data-target=".navbar" data-offset="50">

<?php
require '../menu.php';
?>


<div class="page-header" style="margin-left: 30px; margin-right: 30px">
    <h1>Погрузитесь в мир кино с отечественными новинками! <br>
        <small> И шедеврами мирового кино</small>
    </h1>
</div>
<!---->
<!--<div id="catalogFilms" style="max-width: 1230px; margin-left: 50px;">-->



<div class="main" style="max-width: 1230px;">
    <div class="wrapper">
        <div id = "catalogFilms" class="catalog-films">


        </div>
    </div>
</div>


</body>


<?php
require '../footer.php';
?>

</body>

</html>
