<?php


require '../head.php';

?>

<html lang="en">


<body id="myPage" onload="loadAdminPage()" data-spy="scroll" data-target=".navbar" data-offset="50">

<?php
require '../menu.php';
?>

<!--    приветствие и панельки-->


<div class="container-fluid">
    <div class="row">

        <div class="col-lg-3">
            <div class="thumbnail">

                <h2>Администратор</h2>
                <span class='pull-right'>
                            <a type='button' data-toggle='modal' data-target='#form_change'>
                                <span class='glyphicon glyphicon-pencil'>
                                </span>
                            </a>
                        </span>


                <br>

                <div id="aboutUser" class="col-1">
                    <span class='pull-right'>
                        <h3 id="firstName">Имя :</h3> </span><br>
                    <span class='pull-right'>
                        <h3 id="lastName">Фамилия :</h3></span><br>
                    <span class='pull-right'>
                        <h3 id="birthDate">Дата рождения :</h3></span><br>
                    <span class='pull-right'>
                        <h3 id="money">Баланс :</h3></span><br>
                    <!---->
                </div>
            </div>
        </div>


        <div class="col-lg-8">

            <div class='page-header'>
                <h1 id="greeting">Здравствуйте, </h1>
            </div>


            <!--    коризина  -->
            <H2>Что вы хотите сделать? </H2>
            <div>
                <a  class='btn btn-primary' role='button'>Дать денях пользователю</a>
                <a  class='btn btn-primary' role='button'>Добавить новый сеанс</a>
                <a  class='btn btn-primary' role='button'>Добавить новый фильм</a>
                <a  class='btn btn-primary' role='button'>Купить билет на фильм</a>

            </div>
        </div>

    </div>
</div>


<?php
require '../footer.php';
?>

</body>
<script src="admin.js"></script>
</html>
