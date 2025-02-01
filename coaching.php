<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fitness-Area - Vous accueil du Lundi au Vendredi</title>
    <link rel="icon" href="./img/favicon.ico">
    <!-- FONT AWESOME -->
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
                <span class="heading-label">Coachs</span>
                <h1>Découvrez vos<br>Coach !
                </h1>
                <p>Des formules <strong>tout inclus et sans engagement</strong> pour accéder au sport premium et à des services incomparables.</p>

            </div>
        </div>

        <!-- Team -->
        <section class="team-band">
            <div class="bloc-band">
                <h1>VOTRE <span>ÉQUIPE</span> de fitness-area</h1>
                <div class="team-bloc-band">
                    <div class="card-element"tabindex="0">

                            <div class="card-container">
                                <div class="card-img">
                                    <img src="./img/coach/coach-1.png" alt="coach fitness-area">

                                </div>
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
                            <div class="calendar-coach">
                                <button class="btn-reserved">Réserver avec ce coach</button>
                                <div class="more-infos">
                                    <i class="fa-solid fa-circle-info"></i>
                                </div>
                            </div>

                    </div>
                    <div class="card-element">

                            <div class="card-container">
                                <div class="card-img">

                                    <img src="./img/coach/coach-2.png" alt="coach fitness-area">
                                </div>
                            </div>
                            <div class="element-title-img">
                                <p>Sarah</p>
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
                            <div class="calendar-coach">
                                <button class="btn-reserved">Réserver avec ce coach</button>
                                <div class="more-infos">
                                    <i class="fa-solid fa-circle-info"></i>
                                </div>
                            </div>

                    </div>
                    <div class="card-element">
                            <div class="card-container">
                                <div class="card-img">
                                    <img src="./img/coach/coach-3.png" alt="coach fitness-area">
                                </div>
                            </div>
                            <div class="element-title-img">
                                <p>Thomas</p>
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
                            <div class="calendar-coach">
                                <button class="btn-reserved">Réserver avec ce coach</button>
                                <div class="more-infos">
                                    <i class="fa-solid fa-circle-info"></i>
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









    <script src="./js/index.js"></script>

</body>

</html>