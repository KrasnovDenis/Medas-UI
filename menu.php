<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="../index.php">Medas</a>
        </div>


        <div class="collapse navbar-collapse" id="myNavbar" >
            <ul id="menuNavBar" class="nav navbar-nav navbar-right">
                <?php
                $menu = array("О НАС" => '/main/about_us.php',
                    "РАСПИСАНИЕ" => '/schedule/schedulePage.php'


                );
                foreach ($menu as $k => $v) {
                    echo "<li><a href=$v>$k</a></li>";
                }
                ?>

                <!--меню                -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        КОНТАКТЫ
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu">
                        <li class="text-center">
                            <p>Телефон : +7 (953)-637-44-26</p>
                            <p>Адрес : улица Горящих Помидоров 14\88</p>
                            <p>fax : 123342</p>
                        </li>
                    </ul>
                </li>


                <!--     меню           -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">БОЛЬШЕ
                        <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a id ='loginButton' type='button' data-toggle='modal' data-target='#login-form'>LOG IN</a></li>

                        <li><a id ='registrationButton' type="button" data-toggle="modal" data-target="#registration-form">REGISTRATION</a></li>

                    </ul>
                </li>
                <li><a href="#">
                        <span class="glyphicon glyphicon-search"></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>


<!--ВХОД-->


<div id="login-form" class="modal fade" style="z-index: 10000">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" data-dismiss="modal">×</button>
                <h4 class="modal-title">АВТОРИЗАЦИЯ</h4>
            </div>
            <p class="text-center">Введите данные в форму ниже</p>
            <div class="container text-center">
                <div class="row">
                    <div class="col-lg-2"></div>

                    <!--form-->
                    <form id="loginForm" action="#" onsubmit="return false;" method="post" class="col-lg-2">
                        <div class="form-group">
                            <input id = 'loginLogin' type="text"  class="form-control"
                                   name="Login" placeholder="Login" required>
                            <i class="fa fa-user"></i>
                        </div>
                        <div class="form-group">
                            <input id = 'loginPassword' type="Password" pattern="^(?=.*\d)(?=.*[A-z])(?!.*\s).*$" name="Password"
                                   class="form-control" placeholder="Password" required>
                            <i class="fa fa-lock"></i>
                        </div>

                        <button type="submit" onclick="login(this)" class="btn btn-warning" name="submit" style="display:block;"> Войти
                        </button>
                    </form>


                </div>
            </div>
        </div>
    </div>
</div>

<!--РЕГИСТРАЦИЯ-->


<div id="registration-form" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" data-dismiss="modal">×</button>
                <h4 class="modal-title">РЕГИСТРАЦИЯ</h4>
            </div>
            <hr>
            <p class="text-center">Введите данные в форму ниже</p>
            <div class="container text-center" style="padding: -50px 0 -50px 0">
                <div class="row">
                    <div class="col-lg-2"></div>

                    <!--                    форма -->
                    <form id ="registrationForm" action="#" onsubmit="return registration(this);" method="post" class="col-lg-2 form-group">
                        <div class="form-group">
                            <input id = "firstName" type="text" class="form-control" pattern="[А-яA-z]{3,15}" name="First_name"
                                   placeholder="Your Firstname">
                            <i class="fa fa-lock"></i>
                        </div>
                        <div class="form-group">
                            <input id="lastName" type="text" pattern="[А-яA-z]{3,15}" class="form-control" name="Last_name"
                                   placeholder="Your Lastname">
                            <i class="fa fa-lock"></i>
                        </div>

                        <div class="form-group">
                            <input id="login" type="text" class="form-control" pattern="^(?=.*\d)(?=.*[A-z])(?!.*\s).*$"
                                   name="Login" placeholder="Your Login" required>
                            <i class="fa fa-user"></i>
                        </div>
                        <div class="form-group">
                            <input id = "password" type="password" class="form-control" pattern="^(?=.*\d)(?=.*[A-z])(?!.*\s).*$"
                            name="Password" placeholder="Your Password" required>
                            <i class="fa fa-lock"></i>
                        </div>
                        <div class="form-group">
                            <input id="email" type="email" class="form-control" name="Email" placeholder="Your email" required>
                            <i class="fa fa-lock"></i>
                        </div>
                        <div class="form-group">
                            <input id ="phone" type="text" name="Phone" pattern='[0-9]{5,20}' class="form-control"
                                   placeholder="Your Number Phone" required>
                            <i class="fa fa-user"></i>
                        </div>

                        <div class="form-group">
                            <input id= "dateBirth" type="date" class="form-control" name="Date_birth" placeholder="Date of Birth"
                                   required>
                            <i class="fa fa-lock"></i>
                        </div>

                        <button type="submit" onload="" class="btn btn-warning" name="submit" style="display:block;">
                            Зарегистрироваться
                        </button>

                    </form>


                </div>
            </div>
        </div>
    </div>
</div>


<hr>
<hr>

<script>

        if(localStorage.Login === 'successful'){
            document.getElementById('menuNavBar').innerHTML += '<li><a href=/user/account.php>' + localStorage['firstName'].toUpperCase()+ '</a></li>';
            document.getElementById('menuNavBar').innerHTML += '<li><a href=# onclick=logout()>LOG OUT</a></li>';
        }

        if(localStorage.role === "ADMIN") {
            document.getElementById('menuNavBar').innerHTML +=
                        '<li><a href=/admin/admin.php>Админка</a></li>';
        }
</script>


<!--
1) множества 
2) полугруппы
3) отображения
4) булевы ф-ции
5) комбинаторика треугольник поскаля и проч
6) графы
7) кодирование
8) -->
