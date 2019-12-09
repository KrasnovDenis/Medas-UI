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

                    <!--                    форма -->
                    <form  method='post' class='col-lg-2 form-group'>
                        <div class='form-group'>
                            <input type='text' class='form-control' pattern='[А-яA-z]{3,15}' name='First_name'
                                   ">
                            <i class='fa fa-lock'></i>
                        </div>
                        <div class='form-group'>
                            <input type='text' class='form-control' pattern='[А-яA-z]{3,15}' name='Last_name'
                                   ">
                            <i class='fa fa-lock'></i>
                        </div>
                        <div class='form-group'>
                            <input type='text' class='form-control' pattern='[А-яA-z]{0,15}' name='Vather_name'
                                  ">
                            <i class='fa fa-lock'></i>
                        </div>
                        <div class='form-group'>
                            <input type='text' class='form-control' pattern='^(?=.*\d)(?=.*[A-z])(?!.*\s).*$'
                                   name='Login'  required>
                            <i class='fa fa-user'></i>
                        </div>
                        <div class='form-group'>
                            <input type='text' class='form-control' name='Sex'  required>
                            <i class='fa fa-lock'></i>
                        </div>

                        <div class='form-group'>
                            <input type='text' class='form-control' name='Address'
                                   required>
                            <i class='fa fa-lock'></i>
                        </div>

                        <div class='form-group'>
                            <input type='text' class='form-control' name='Date_birth'
                                   required>
                            <i class='fa fa-lock'></i>
                        </div>
                        <div class='form-group'>
                            <input type='Email' class='form-control' name='Email' required>
                            <i class='fa fa-lock'></i>
                        </div>

                        <button type='submit' class='btn btn-warning' name='submit' style='display:block;'>
                            Зарегистрироваться
                        </button>

                    </form>


                </div>
            </div>
        </div>
    </div>
</div>


</body>

</html>




