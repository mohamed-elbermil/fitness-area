<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fitness-Area - Concept</title>


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
                <span class="heading-label">Concept</span>
                <h1>Découvrez nos formules<br>d’abonnement !
                </h1>
                <p>Des formules <strong>tout inclus et sans engagement</strong> pour accéder au sport premium et à des services incomparables.</p>

            </div>
        </div>
        <section class="description-text-image">
            <div class="bloc-text">

                <h2>Des espaces uniques !</h2>
                <p>Avec Fitness Park, améliore ta condition physique, tonifie ton corps et développe ta masse musculaire. Grâce à des espaces adaptés sur plus de 1000m², façonne tes entraînements à la perfection . Avec Fitness Park, améliore ta condition physique, tonifie ton corps et développe ta masse musculaire. Grâce à des espaces adaptés sur plus de 1000m², façonne tes entraînements à la perfection :Avec Fitness Park, améliore ta condition physique, tonifie ton corps et développe ta masse musculaire. Grâce à des espaces adaptés sur plus de 1000m², façonne tes entraînements à la perfection . Avec Fitness Park, améliore ta condition physique, tonifie ton</p>
                <div class="call-to-action">
                    <a href="./contact.php">Je m'inscris</a>
                </div>
            </div>
            <img src="./img/eat.png" alt="">
        </section>

        <section>
            <div class="session">

                <h3 class="text-border title-band">Nos cours</h3>
                <div class="all-session">
                    <a href="#"><img src="./img/eat.png" alt=""></a>
                    <a href="#"><img src="./img/eat.png" alt=""></a>
                    <a href="#"><img src="./img/eat.png" alt=""></a>
                    <a href="#"><img src="./img/eat.png" alt=""></a>
                    <a href="#"><img src="./img/eat.png" alt=""></a>
                    <a href="#"><img src="./img/eat.png" alt=""></a>


                </div>
            </div>
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