<html>


<body>
<!--form-->


<div id='form_change' class='modal fade'>
    <div class='modal-dialog'>
        <div class='modal-content'>
            <div class='modal-header'>
                <button class='close' type='button' data-dismiss='modal'>×</button>
                <h4 class='modal-title'>ИЗМЕНЕНИЕ ПАРАМЕТРОВ</h4>
                <h5> Вы можете изменить любые параметры ниже</h5>
            </div>
            <hr>
            <p class='text-center'>Введите данные в форму ниже</p>
            <div class='container text-center' style='padding: -50px 0 -50px 0'>
                <div class='row'>
                    <div class='col-lg-2'></div>

                    <form method='post' onsubmit="update_user(); return false;" class='col-lg-2 form-group'>
                        <div class='form-group'>
                            <input id= "firstName-form" type='text' class='form-control' placeholder="First Name" pattern='[А-яA-z]{3,15}'
                                   name='First_name' required>
                        </div>
                        <div class='form-group'>
                            <input id="lastName-form" type='text' class='form-control' placeholder="Last Name" pattern='[А-яA-z]{3,15}'
                                   name='Last_name' required>

                        </div>

                        <div class='form-group'>
                            <input id="login-form-change" type='text' class='form-control' placeholder="login"
                                   pattern='^(?=.*\d)(?=.*[A-z])(?!.*\s).*$'
                                   name='Login' required>

                        </div>


                        <div class='form-group'>
                            <input id="date" type='date' class='form-control' name='Date_birth'
                                   required>
                        </div>
                        <div class='form-group'>
                            <input id="email-form" type='Email' class='form-control' placeholder="Email" name='Email' required>

                        </div>

                        <button type='submit' class='btn btn-warning' name='submit' style='display:block;'>
                            Изменить параметры
                        </button>

                    </form>


                </div>
            </div>
        </div>
    </div>
</div>


</body>

</html>




