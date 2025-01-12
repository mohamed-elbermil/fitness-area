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

        <div class="all-formules">
            <!-- 1ère Offre -->
            <div class="form">
                <span>Basic</span>
                <p>20€<span>/mois</span></p>
                <div class="offre">
                    <p>Profitez de 2 semaines offertes</p>
                </div>
                    <div class="all-options">
                         <div class="option">
                            <i class="fa-solid fa-check"></i>
                             <span>Accès illimité au club 7j/7</span>
                         </div>
                         <div class="option">
                            <i class="fa-solid fa-check"></i>
                             <span>Accès au cours collectifs</span>
                         </div>
                         <div class="option">
                            <i class="fa-solid fa-check"></i>
                             <span>Equipements high-tech & connectés</span>
                         </div>
                         <div class="option">
                         <i class="fa-solid fa-xmark"></i>                             <span>Accès au hammam & sauna</span>
                         </div>
                         <div class="option">
                            <i class="fa-solid fa-check"></i>

                             <span>Sans engagement annuel</span>
                         </div>
                    </div>
                    <div class="call-to-action">
                        <a href="./contact.php">Je m'inscris</a>
                    </div>
            </div>
            <!-- 2ème Offre -->
            <div class="form">
                <span>Basic</span>
                <p>30€<span>/mois</span></p>
                <div class="offre">
                    <p>Profitez de 3 semaines offertes</p>
                </div>
                    <div class="all-options">
                         <div class="option">
                            <i class="fa-solid fa-check"></i>
                             <span>Accès illimité au club 7j/7</span>
                         </div>
                         <div class="option">
                            <i class="fa-solid fa-check"></i>
                             <span>Accès au cours collectifs</span>
                         </div>
                         <div class="option">
                            <i class="fa-solid fa-check"></i>
                             <span>Equipements high-tech & connectés</span>
                         </div>
                         <div class="option">
                         <i class="fa-solid fa-check"></i>
                         <span>Accès au hammam & sauna</span>
                         </div>
                         <div class="option">
                            <i class="fa-solid fa-check"></i>

                             <span>Sans engagement annuel</span>
                         </div>

                    </div>
                    <div class="call-to-action">
                        <a href="./contact.php">Je m'inscris</a>
                    </div>
            </div>
        </div>

        <!-- TRIO BLOC -->
        <section id="cest-partie" class="bloc-element bg-bloc">
            <?php
                include ("./common/trio-bloc.php")
            ?>
        </section>

        <!-- SERVICES INCLUS -->
         <section class="services-inclus">
            <div class="all-round-services">
                <div class="round-service">
                    <img src="./img/services/woman-smile.webp" alt="services inclus"><br>
                    <span>Tout inclus</span>
                </div>
                <div class="round-service">
                    <img src="./img/services/man-course.webp" alt="services inclus"><br>
                    <span>Sans engagement</span>
                </div>
                <div class="round-service">
                    <img src="./img/services/man-shape.webp" alt="services inclus"><br>
                    <span>Large choix</span>
                </div>
                <div class="round-service">
                    <img src="./img/services/haltère.webp" alt="services inclus"><br>
                    <span>Qualité de service</span>
                </div>

            </div>
            <div class="call-to-action">
                        <a href="./contact.php">Je m'inscris</a>
                    </div>


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