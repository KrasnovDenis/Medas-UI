<?php


require '../head.php';

?>

<html lang="en">


<body id="myPage" onload="loadUserPage()" data-spy="scroll" data-target=".navbar" data-offset="50">

<?php
require '../menu.php';
require 'form_change.php';
?>

<!--    приветствие и панельки-->


<div class="container-fluid">
    <div class="row">

        <div class="col-lg-3">
            <div class="thumbnail">

                <h2>Ваш профиль</h2>
                <span class='pull-right'>
                            <a type='button' data-toggle='modal' data-target='#form_change'>
                                <span class='glyphicon glyphicon-pencil'>
                                </span>
                            </a>
                        </span>


                <br>

                <div  class="col-1">
                    <span class='pull-right'>
                        <h3 id="userFirstName">Имя :</h3>
                    </span><br>
                    <span class='pull-right'>
                        <h3 id="userLastName">Фамилия :</h3>
                    </span><br>
                    <span class='pull-right'>
                        <h3 id="birthDate">Дата рождения :</h3>
                    </span><br>
                    <span class='pull-right'>
                        <h3 id="money">Баланс :</h3>
                    </span><br>
                    <!---->
                </div>
            </div>
        </div>


        <div class="col-lg-8">

            <div class='page-header'>
                <h1 id="greeting">Здравствуйте, </h1>
            </div>


            <!--    коризина  -->
            <h2>Ваша корзина</h2>
            <div>


                <ul id="userBasket" class='list-group'>
<!--                    <li class='list-group-item'>Название -</li>-->
<!--                    <li class='list-group-item'>Стоимость -</li>-->
<!--                    <li class='list-group-item'>Год съемки - </li>-->
                </ul>


            </div>
        </div>

    </div>
</div>


<?php
require '../footer.php';
?>

</body>
<script src="user_repo.js"></script>
</html>