<!DOCTYPE html>
<html lang="en">
<?php
require '../head.php';
?>
<link rel="stylesheet" type="text/css" href="../hall/HallStyle.css">


<body id="myPage" onload="loadHall();" data-spy="scroll" data-target=".navbar" data-offset="50">

<?php
require '../menu.php';
?>


<div class="page-header" style="margin-left: 30px; margin-right: 30px">
    <h1>Погрузитесь в мир кино с отечественными новинками! <br>
        <small> И шедеврами мирового кино</small>
    </h1>
</div>

<div id="catalogFilms">

    <table id="hallTable" >

        <tr >
            <th id="hallName" colspan="10">Кинозал :</th>
        </tr>

    </table>

</div>




<div id="buy_ticket" class="modal fade" style="z-index: 9000;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" data-dismiss="modal">×</button>
                <h4 class="modal-title">Купить билет</h4>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-lg-2"></div>

                    <!--form-->
                    <form id="buyTicketForm" action="#" onsubmit="buyTicket();return false;" method="post" class="col-lg-2">

                        <h2> Подтветрдите покупку </h2>

                        <button type="submit"  class="btn btn-warning" name="submit" style="display:block; margin: 0 auto;"> Купить
                        </button>
                    </form>


                </div>
            </div>
        </div>
    </div>
</div>


<?php
require '../footer.php';
?>

<script src="loadHallPage.js">


</script><script src="buyTicket.js">


</script>
</body>

</html>
