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


    <div class="col-lg-3">
        <div class="thumbnail" style="font-family: Forte; font: 24px black; background: #f5f5f5; border: 2px solid #bbaeff;">

            <h2>Ваш профиль</h2>
            <span class='pull-right'>
                            <a type='button' data-toggle='modal' data-target='#form_change'>
                                <span class='glyphicon glyphicon-pencil'>
                                </span>
                            </a>
            </span>


            <p id="userFirstName">Имя :</p>
            <p id="userLastName">Фамилия :</p>
            <p id="birthDate">Дата рождения :</p>
            <p id="money">Баланс :</p>
            <button class="btn-info btn" onclick="addMoney()">Пополнить баланс</button>
            <!---->
        </div>
    </div>


    <div class="col-lg-8">

        <div class='page-header'>
            <h1 id="greeting">Здравствуйте, </h1>
        </div>


        <!--    коризина  -->
        <h2>Билеты</h2>


        <ul id="userBasket" class='list-group' >

        </ul>


    </div>

</div>


<?php
require '../footer.php';
?>

</body>
<script src="user_repo.js"></script>
</html>