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

                    <!---->
                </div>
            </div>
        </div>


        <div class="col-lg-8">

            <div class='page-header'>
                <h1 id="greeting">Здравствуйте, </h1>
            </div>


            <H2>Что вы хотите сделать? </H2>
            <div>
                <a class='btn btn-primary' role='button' data-toggle="modal" data-target="#createScreen">Создать сеанс
                    фильма</a>
                <a class='btn btn-primary' role='button' data-toggle="modal" data-target="#addFilm">Добавить новый
                    фильм</a>


            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>

    </div>
</div>


<!-- Добавить новый сеанс-->

<div id="createScreen" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" data-dismiss="modal">×</button>
                <h4 class="modal-title">Создать сеанс фильма</h4>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-lg-2"></div>

                    <!--form-->
                    <form action="#" onsubmit=" addScreen(); return false;" method="post" class="col-lg-2">
                        <select id="filmSelect" name="title" required>
                            <option disabled>Выберите фильм из списка</option>
                            <option value="1"> Гордость и предубеждение</option>
                            <option value="2">Человек-волк</option>
                            <option value="3">Тор</option>
                            <option value="4">300 спартанцев</option>
                            <option value="5">Дивергент</option>
                            <option value="6">Скорый Москва-Россия</option>
                            <option value="7">Шерлок Холмс: Игра теней</option>
                            <option value="8">Гарри Поттер Принц полукровка</option>
                            <option value="9">Волкодав</option>
                        </select>
                        <input id="dateTimeFilm" type="datetime-local" name="dateTimeFilm" required/>
                        <input id="price" type="text" name="price" placeholder="Цена билета" required/>

                        <select id="hallSelect" required>
                            <option disabled>Выберите зал</option>
                            <option value="1">Большой зал</option>
                            <option value="2">Малый зал</option>
                            <option value="3">Vip зал</option>
                        </select>

                        <button type="submit" class="btn btn-warning" name="submit"
                                style="display:block; margin: 0 auto;"> Купить
                        </button>
                    </form>


                </div>
            </div>
        </div>
    </div>
</div>


<!-- Добавить фильм-->

<div id="addFilm" class="modal fade" style="z-index: 9000;">
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
                    <form action="#" onsubmit="addFilm();return false;" method="post" class="col-lg-2">
                        <input id="title" type="text" name="title" required placeholder="Title"/>
                        <input id="duration" type="text" pattern="[0-9]{1,2}" name="duration" required
                               placeholder="Duration"/>
                        <input id="rating" type="number" pattern="[1-5]{1}" name="rating by 5 star" required
                               placeholder="Rating"/>
                        <div class="file-upload-wrapper">
                            <input id="poster"  type="file" id="input-file-now" class="file-upload"/>
                        </div>
                        <input id="director" type="text" name="director" required placeholder="Director"/>
                        <input id="producer" type="text" name="producer" required placeholder="Producer"/>
                        <input id="count_review" type="number" name="count_review" required placeholder="Count_review"/>

                        <button type="submit" class="btn btn-warning" name="submit"
                                style="display:block; margin: 0 auto;"> Купить
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

</body>
<script src="admin.js">

    if (localStorage.role != "ADMIN")
        window.location.replace("http://urbas");

</script>
</html>
