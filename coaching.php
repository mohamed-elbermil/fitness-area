<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fitness-Area - Vous accueil du Lundi au Vendredi</title>


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap" rel="stylesheet">

    <link rel="icon" href="./img/favicon.ico">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- CSS -->
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/variables.css">
</head>

<body>

    <div id="barre" style="width: 984.211px;"></div>

    <header class="nav_header scroll">
        <?php
        include('./common/menu.php')
        ?>
    </header>


    <main>
        <div class="banner banner-form">
            <div class="text_btn">
                <span class="heading-label">Abonnements</span>
                <h1>Découvrez nos formules<br>d’abonnement !
                </h1>
                <p>Des formules <strong>tout inclus et sans engagement</strong> pour accéder au sport premium et à des services incomparables.</p>

            </div>
        </div>

        <!-- Team -->
        <section class="team-band">
            <h1>VOTRE ÉQUIPE L'Appart de fitness-area</h1>
            <div class="team-bloc-band">
                <div class="card-element">
                    <a href="">

                        <div class="card-img">
                            <img src="./img/coach/coach-1.png" alt="coach fitness-area">
                        </div>
                        <div class="element-title-img">
                            <p>Julien</p>
                            <span>Coach de musculation</span>
                            <div class="social-media-coach">
                                <div class="round-icon-border">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </div>
                                <div class="round-icon-border">
                                    <i class="fa-brands fa-instagram"></i>
                                </div>
                                <div class="round-icon-border">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </div>


                            </div>

                        </div>
                    </a>

                </div>
                <div class="card-element">
                    <div class="card-img">
                        <img src="./img/coach/coach-1.png" alt="coach fitness-area">
                    </div>
                    <div class="element-title-img">
                        <p>Julien</p>
                        <span>Coach de musculation</span>
                        <div class="social-media-coach">
                            <div class="round-icon-border">
                                <i class="fa-brands fa-facebook-f"></i>
                            </div>
                            <div class="round-icon-border">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <div class="round-icon-border">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>


                        </div>

                    </div>

                </div>
                <div class="card-element">
                    <div class="card-img">
                        <img src="./img/coach/coach-1.png" alt="coach fitness-area">
                    </div>
                    <div class="element-title-img">
                        <p>Julien</p>
                        <span>Coach de musculation</span>
                        <div class="social-media-coach">
                            <div class="round-icon-border">
                                <i class="fa-brands fa-facebook-f"></i>
                            </div>
                            <div class="round-icon-border">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <div class="round-icon-border">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>


                        </div>

                    </div>

                </div>



            </div>



        </section>

        <!-- TRIO BLOC -->
        <section id="cest-partie" class="bloc-element bg-bloc">
            <?php
            include("./common/trio-bloc.php")
            ?>
        </section>

        <!-- SERVICES INCLUS -->
        <section class="services-inclus">
            <?php
            include('./common/our-values.php')
            ?>
        </section>
        <section id="contact-us">
            <?php
            include('./common/contact-us.php')
            ?>
        </section>
    </main>
    <footer>
        <?php
        include('./common/footer.php')
        ?>
    </footer>









    <script src="/js/index.js"></script>

</body>

</html>