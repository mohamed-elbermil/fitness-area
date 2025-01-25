<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fitness-Area - A-Propos</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Fav icon -->
    <link rel="icon" href="./img/favicon.ico">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-C4W2GDNN33"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-C4W2GDNN33');
    </script>
    <!-- CSS -->
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/variables.css">

</head>
<div id="barre" style="width: 96.9574px;"></div>

<body>


    <header class="nav_header scroll">
        <?php
        include('./common/menu.php')
        ?>
    </header>
    <nav>
        <a href="./index.html"> <img src="./img/Logo-blanc.png" alt="Logo" id="logo"></a>
        <ul>
            <li><a href="tarifs.html">Tarifs</a>
                <a href="equipement.html">Equipement</a>
                <a href="A-Propos.html">
                    <NOBR>à propos</NOBR>
                </a>
                <a href="sinscrire.html"><span>
                        <NOBR>Contact</NOBR>
                    </span></a>
            </li>
        </ul>
    </nav>


    </header>


    <main>
        <div class="A-prop-main">
            <img src="./img/Banniere_a-propos.webp" alt="Bannière de la page à propos" id="A-propos-img">



            <div class="intro_A-propos">
                <h1>NOUS SOMMES A l'ECOUTE !</h1>
                <p>Transpire l’effort et atteins tes objectifs avec Fitness-Area. Une salle repensée pour les sportifs débutants, occasionels ou <br> même expérimentés. Nos coach sont à ta disposition en cas de doute ou de besoin particulier.<br>
                    Aucune excuse pour ne pas y aller ! </p> <img src="./img/modele.webp" alt="Homme sur son smartphone" class="modele reveal">
            </div>

            <div class="coach_profil">
                <div class="coach_nom">
                    <img src="./img/coach1.webp" alt="coach sportif">
                    <h1>Julia</h1>
                    <p>Coach sportif</p>
                </div>

                <div class="coach_nom">
                    <img src="./img/coach2.webp" alt="coach sportif">
                    <h1>Sebastien</h1>
                    <p>Coach sportif</p>
                </div>
                <div class="coach_nom">
                    <img src="./img/coach3.webp" alt="coach sportif">
                    <h1>Thomas</h1>
                    <p>Coach sportif</p>
                </div>
                <div class="coach_nom">
                    <img src="./img/coach4.webp" alt="coach sportif">
                    <h1>Célia</h1>
                    <p>Coach sportif</p>
                </div>
            </div>

            <!-- ----Carousel coach---- -->
            <section class="product">

                <h1 id="scrollez">Scrollez ! </h1>
                <div class="product-container">

                    <div class="coach_carousel1">

                        <div class="coach_profil1">
                            <img src="./img/coach1.webp" alt="coach sportif">
                            <div class="coach_nom-carousel">
                                <h1>Julia</h1>
                                <p>Coach sportif</p>
                            </div>
                        </div>
                    </div>


                    <div class="coach_carousel1">

                        <div class="coach_profil1">
                            <img src="./img/coach2.webp" alt="coach sportif">
                            <div class="coach_nom-carousel">
                                <h1>Sébastien</h1>
                                <p>Coach sportif</p>
                            </div>
                        </div>
                    </div>

                    <div class="coach_carousel1">
                        <div class="coach_profil1">
                            <img src="./img/coach3.webp" alt="coach sportif">
                            <div class="coach_nom-carousel">
                                <h1>Thomas</h1>
                                <p>Coach sportif</p>
                            </div>

                        </div>
                    </div>

                    <div class="coach_carousel1">

                        <div class="coach_profil1">
                            <img src="./img/coach4.webp" alt="coach sportif">
                            <div class="coach_nom-carousel">
                                <h1>Célia</h1>
                                <p>Coach sportif</p>
                            </div>

                        </div>
                    </div>




                </div>



            </section>



            <!--Présentation salle-->
            <h2 id="Salle-titre">Votre salle de sport</h2>

            <div class="Article_salle">

                <img src="./img/Batiment-FA.webp" alt="Salle de sport" id="Salle_de_sport">
                <div class="texteNbtn">
                    <p> Tu as besoin de conseil ou d'assistance pour effectuer tes exercices ? Fitness-Area est la salle de sport qui propose
                        bien mieux que ça. Bénéficie de <a href="./tarif.php">2 semaines offertes</a> pour te faire un avis sur celle-ci. Il y aura
                        à ta disposition les coachs sportifs en cas de besoins particuliers et de nombreuses machines de
                        musculation pour te renforcer ! Le sport est un excellent médicament.
                        Qu’il s’agisse du soin ou de la prévention, l’activité physique est un indispensable allié
                        contre les maladies chroniques. Des maux dont le nombre de patients va augmenter en lien avec
                        le vieillissement de la population. Si tu veux mieux nous connaitre n'hésite pas à nous rejoindre sur notre page <a href="https://www.instagram.com/fitnessarea8/?hl=fr" target="_blank">Instagram </a> !</p>
                    <a href="./sinscrire.php" id="inscrire1">S'inscrire</a>
                </div>
            </div>

            <!---->




            <!---->


            <!--Qr-Code-->
            <div class="rectangle_rouge">
                <img src="./img/modele.webp" alt="homme consultant son téléphone" id="modele_pub">
                <p id="texte1">Flashez sur <br><span>l'insta</span> </p>
                <img src="./img/qr-code-insta.png" alt="qr code instagram" id="qr_code">



            </div>
            <!---->

            <!-- --FAQ--- -->





        </div>


        </div>

        <div class="illustration_bas">
            <img src="./img/Illustration_bas.png" alt="illustration vectorielle">
        </div>

    </main>

    <footer>
        <?php
        include('./common/footer.php')
        ?>
    </footer>
    </div>







    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <script src="./js/index.js"></script>


</body>

</html>