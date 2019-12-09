<html>
<?php
   require 'head.php';
    
    ?>   



<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50">

<?php 
    require 'menu.php';
?>
    
    
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>


        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img src="images/Background3.jpg" alt="pic tv" width="1200" height="700">
                <div class="carousel-caption">
                    <h3>ПРЯМ КАК В ДЕТСТВЕ</h3>
                    <p>проведи вечер в кино!</p>
                </div>
            </div>

            <div class="item">
                <img src="images/Background.jpg" alt="Chicago" width="1200" height="700">
                <div class="carousel-caption">
                    <h3>КИНОТЕАТР ОДИН</h3>
                    <p>А ФИЛЬМОВ КУЧА</p>
                </div>
            </div>

            <div class="item">
                <img src="images/Background2.jpg" alt="Los Angeles" width="1200" height="700">
                <div class="carousel-caption">
                    <h3>Просто и удобно</h3>
                    <p>перестаньте тратить время на скачивание!</p>
                </div>
            </div>
        </div>

        <!-- кнопки -->
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <!--        end carousel-->

<!--   three pic begin-->
    
    
    <div class=' col-sm-6 col-md-4 col-lg-1 '></div>
                       <div class=' col-sm-6 col-md-4 col-lg-4 '>
                                  <img src="images/garant.jpg" width='130' height='170' alt='эмблема'>
                                  <div class='caption'>
                                      <h3>Качественно</h3>
                                    
                                  </div>
                                </div>
            
            <div class=' col-sm-6 col-md-4 col-lg-4 '>
                                  <img src="images/money.jpg" width='130' height='170' alt='эмблема'>
                                  <div class='caption'>
                                      <h3>Быстро</h3>
                                    
                                  </div>
                                </div>
            
            <div class=' col-sm-6 col-md-4 col-lg-3 '>
                                  <img src="images/time.jpg" width='130' height='170' alt='эмблема'>
                                  <div class='caption'>
                                      <h3> Надежно</h3>
                                    
                                  </div>
                                </div>
        
       
    
<!--   three pic end-->

<?php 
   require 'footer.php';
    ?>   


</body>

</html>
