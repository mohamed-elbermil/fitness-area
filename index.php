<!DOCTYPE html>
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
<div id="barre" style="width: 96.9574px;"></div>
<body>
    <header class="nav_header">
        <?php
        include('./common/menu.php')
        ?>
    </header>
    <main>
        <div class="banner">
            <div class="text_btn">
                <h1>Salle de <span>sport</span> à Lyon <br>
                    ton nouveau <span>chez toi !</span>
                </h1>
                <div class="call-to-action">
                    <a href="./contact.php">Je m'inscris</a>
                    <a href="#" class="hover-element">Je réserve ma séance d'essai</a>
                    <p class="incitation hidden-element">Tu verras, c'est chouette !</p>
                </div>
            </div>
        </div>
        <section id="horaire">
            <div class="planning">
                <table>
                    <caption>Horaires d'ouverture du club</caption>
                    <thead>
                        <tr>
                            <th data-day="1" scope="col">Lundi</th>
                            <th data-day="2" scope="col">Mardi</th>
                            <th data-day="3" scope="col">Mercredi</th>
                            <th data-day="4" scope="col">Jeudi</th>
                            <th data-day="5" scope="col">Vendredi</th>
                            <th data-day="6" scope="col">Samedi</th>
                            <th data-day="0" scope="col">Dimanche</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-day="1">06:00 - 23:00</td>
                            <td data-day="2">06:00 - 23:00</td>
                            <td data-day="3">06:00 - 23:00</td>
                            <td data-day="4">06:00 - 23:00</td>
                            <td data-day="5">06:00 - 23:00</td>
                            <td data-day="6">06:00 - 23:00</td>
                            <td data-day="0">06:00 - 23:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <div class="iframe-home">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696.2132881454221!2d4.837379569701368!3d45.734039698192475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea24e07c8567%3A0xacd405ad60f5ed29!2s1%20Rue%20de%20l&#39;Effort%2C%2069007%20Lyon!5e0!3m2!1sfr!2sfr!4v1736089323521!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <!-- SECTION "C'est partie" -->
        <section id="cest-partie" class="bloc-element">
            <svg viewBox="0 0 514.72 200.68" class="motif">
                <path d="m19.84,75.05C90.62,4.83,196.53,15.91,255.66,99.71h0c60.27,85.41,168.79,95.01,239.25,21.15" />
            </svg>
            <div class="textNservices">
                <div class="title-band" id="title-bg-white">
                    <p><span>Peu importe votre niveau</span></p>
                    <p>C'est partie !</p>
                </div>
                <div class="services-trio wrapper">
                    <!-- Musculation -->
                    <div class="service-text">
                        <a href="#">
                            <img src="./img/musculation.webp" alt="service de musculation">
                        </a>
                        <div class="text-services">
                            <div class="little-title">
                                <p>C'est</p>
                                <span> partie</span>
                            </div>
                            <div class="title-service">
                                <p>Musculation</p>
                            </div>
                        </div>
                    </div>
                    <!-- Détente -->
                    <div class="service-text">
                        <a href="#">
                            <img src="./img/detente-service.webp" alt="service de détente">
                        </a>
                        <div class="text-services">
                            <div class="little-title">
                                <p>C'est</p>
                                <span> partie</span>
                            </div>
                            <div class="title-service">
                                <p>Détente</p>
                            </div>
                        </div>
                    </div>
                    <!-- Préparation mentale -->
                    <div class="service-text">
                        <a href="#">
                            <img src="./img/mentale.webp" alt="service de préparation mentale">
                        </a>
                        <div class="text-services">
                            <div class="little-title">
                                <p>C'est</p>
                                <span> partie</span>
                            </div>
                            <div class="title-service">
                                <p>Préparation mentale</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="en-savoir-plus">
                    <a href="#">Voir les abonnements</a>
                </div>
            </div>
        </section>
        <!-- MAINTENANT -->
        <div class="maintenant">
            <div class="scrolling-animation">
                <p class="Now">Maintenant</p>
                <p class="Now">Maintenant</p>
                <p class="Now">Maintenant</p>
                <p class="Now">Maintenant</p>
                <p class="Now">Maintenant</p>
                <p class="Now">Maintenant</p>
                <p class="Now">Maintenant</p>
                <p class="Now">Maintenant</p>
                <p class="Now">Maintenant</p>
                <p class="Now">Maintenant</p>
                <p class="Now">Maintenant</p>
                <p class="Now">Maintenant</p>
                <p class="Now">Maintenant</p>
                <p class="Now">Maintenant</p>
                <p class="Now">Maintenant</p>
            </div>
        </div>
        <!-- --------A VOS MARQUES------------------ -->
        <section class="band-service">
            <h2 class="title-band">à vos marques... prêts ? partez !</h2>
            <h3>MOTIV</h3>
            <div class="prestation wrapper">
                <div class="item">
                    <a href="./muscler.html"><img src="./img/muscle.webp" alt="homme qui se muscle"></a>
                    <span>Se muscler</span>
                </div>

                <div class="item">
                    <a href="./detente.html"><img src="./img/detente.webp" alt="femme qui se détend "></a>
                    <span>Se détendre</span>
                </div>
                <div class="item">
                    <a href="maigrir.html"><img src="./img/depasser.webp" alt="couple qui souhaite maigrir"></a>
                    <span>Se dépasser</span>
                </div>
            </div>
        </section>
        <!-- A-vos-marque Carousel -->
        <section class="product">
            <div class="product-container">
                <div class="Bloc_prestation">
                    <a href="./muscler.html"><img src="./img/muscle.webp" alt="maigrir" id="muscle_img"></a>
                    <span id="muscle">Se muscler</span>
                </div>
                <div class="Bloc_prestation">
                    <a href="./detente.html"><img src="./img/detente.webp" alt="maigrir"></a>
                    <span>Se détendre</span>
                </div>
                <div class="Bloc_prestation">
                    <a href="./depasser.html"><img src="./img/depasser.webp" alt="se dépasser"></a>
                    <span>Se dépasser</span>
                </div>
            </div>
        </section>
        <!-- PROMOTION DES RESEAUX SOCIAUX -->
        <section id="promo-instagram">
            <div class="image-promo">
                <img src="./img/fitness-area-mockup.png" alt="Le compte instagram de Fitness-Area">
            </div>
            <div class="text-promo">
                <div class="title-promo">
                    <p><span>instagram</span></p>
                    <p>Construire du muscle et des liens 💪🏼</p>
                </div>
                <div class="contenue-promo">
                    <div class="promo">
                        <i class="fa-solid fa-check"></i>
                        <p>Une multitude de séances d'entrainement, pour tous les niveaux et tous les objectifs</p>
                    </div>
                    <div class="promo">
                        <i class="fa-solid fa-check"></i>
                        <p>De l'inspiration sur mesure (recettes, blogs,conseils et astuces)</p>
                    </div>
                    <div class="promo">
                        <i class="fa-solid fa-check"></i>
                        <p>Planifier vos séances et suivez vos progrès de près</p>
                    </div>
                    <div class="en-savoir-plus">
                        <a href="#" class="en-savoir-plus">Visitez notre instagram</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- SECTION - INFORMATIONS PRATIQUES -->
        <section id="infos-club" class="bloc-element">
            <div class="title-band" id="title-bg-white">
                <p><span>Informations pratiques</span></p>
                <div class="icon-text-container">
                    <div class="bloc-infos-icon">
                        <div class="icon-text">
                            <i class="fa-solid fa-temperature-three-quarters"></i>
                            <p>climatisation</p>
                        </div>
                        <div class="icon-text">
                            <i class="fa-solid fa-wifi"></i>
                            <p>Wifi</p>
                        </div>
                    </div>
                    <div class="bloc-infos-icon">
                        <div class="icon-text">
                            <i class="fa-solid fa-mug-hot"></i>
                            <p>Café offert</p><br>
                        </div>
                        <div class="icon-text">
                            <i class="fa-solid fa-shower"></i>
                            <p>Douche individuelle</p>
                        </div>
                    </div>
                    <div class="bloc-infos-icon">
                        <div class="icon-text">
                            <i class="fa-solid fa-car"></i>
                            <p>Parking</p>
                        </div>
                        <div class="icon-text">
                            <i class="fa-solid fa-music"></i>
                            <p>Musique inspirante</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="cest-partie" class="bloc-element bg-bloc">
            <?php
            include("./common/trio-bloc.php")
            ?>
        </section>
        <!-- VIDEO -->
        <div class="publicity">
            <video controls src="./img/pub.mp4" poster="./img/miniature.png" id="myvideo" muted="muted" alt="Publicité Fitness-Area"></video>
        </div>
        <!-- --------Articles-------------- -->
        <div class="all-articles wrapper">
            <div class="article-side">
                <div class="article_bloc">
                    <div class="carre_texte">
                        <img src="./img/detente.webp" alt="femme qui se détend">
                        <div class="texte_bloc">
                            <h1>24 Avril 2022</h1>
                            <h2>5 astuces pour maigrir</h2>
                            <p>Boire régulièrement est le meilleur moyen d'éviter la déshydratation. Buvez de l'eau avant, pendant et après l'exercice...</p>
                            <div class="btn_bloc"><a href="#">En savoir +</a></div>
                        </div>
                    </div>
                </div>
                <div class="article_bloc">
                    <div class="carre_texte">
                        <img src="./img/Habitude.webp" alt="femme qui s'étire">
                        <div class="texte_bloc">
                            <h1>24 Avril 2022</h1>
                            <h2>Les bonnes habitudes du quotidien</h2>
                            <p>Il est parfois difficile d'être heureux au quotidien. Nous avons tous des engagements qui incluent le travail, la technologie etc... </p>
                            <div class="btn_bloc"><a href="#">En savoir +</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="article-side">
                <div class="article_bloc">
                    <div class="carre_texte">
                        <img src="./img/noix_cajoux.webp" alt="noix de cajoux posé sur la table">
                        <div class="texte_bloc">
                            <h1>24 Avril 2022</h1>
                            <h2>Nos conseils nutrition !</h2>
                            <p>Pour fonctionner correctement, le corps humain a besoin d’énergie. Ces besoins énergétiques sont couverts par les aliments...</p>
                            <div class="btn_bloc"><a href="#">En savoir +</a></div>
                        </div>
                    </div>
                </div>
                <div class="article_bloc">
                    <div class="carre_texte">
                        <img src="./img/Muscle-article.webp" alt="biceps contracté">
                        <div class="texte_bloc">
                            <h1>24 Avril 2022</h1>
                            <h2>5 astuces pour se muscler</h2>
                            <p>Bien sûr, il faut faire des efforts pour obtenir des résultats, mais avec quelques astuces et conseils, vous pourrez gagner du muscle plus rapidement...</p>
                            <div class="btn_bloc"><a href="#">En savoir +</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- TEMOIGNAGE -->
        <h3 id="like">Ils sont satisfaits</h3>
        <div class="avis">
            <div class="temoignage">
                <img src="./img/profile/pp-Celia.webp" alt="photo de profil d'utilsateur" id="pp">
                <hn id="nom">Célia</hn>
                <p>"Une salle à la hauteur de mes attentes"</p>
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div class="temoignage">
                <div class="nom1">
                    <img src="./img/profile/pp-maxime.webp" alt="photo de profil d'utilsateur" id="pp">
                    <hn id="nom">Maxime</hn>
                </div>
                <p>"Je ne suis pas déçu par cette salle"</p>
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div class="temoignage">
                <div class="nom1">
                    <img src="./img/profile/pp-leon.webp" alt="photo de profil d'utilsateur" id="pp">
                    <hn id="nom">Léon</hn>
                </div>
                <p>"Excellent rapport qualité / prix"</p>
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div class="temoignage">
                <img src="./img/profile/pp-Sandra.webp" alt="photo de profil d'utilsateur" id="pp">
                <hn id="nom">Sandra</hn>
                <p>"Salle très propre, tranquille."</p>
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
        <!-- Témoignage carousel pour smartphone -->
        <section class="product">
            <div class="product-container">
                <div class="temoignage">
                    <img src="./img/pp-Celia.webp" alt="photo de profil d'utilsateur" id="pp">
                    <hn id="nom">Célia</hn>
                    <p>"Une salle à la hauteur de mes attentes"</p>
                    <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div class="temoignage">
                    <img src="./img/pp-maxime.webp" alt="photo de profil d'utilsateur" id="pp">
                    <hn id="nom">Maxime</hn>
                    <p>"Une salle à la hauteur de mes attentes"</p>
                    <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div class="temoignage">
                    <div class="nom1">
                        <img src="./img/pp-leon.webp" alt="photo de profil d'utilsateur" id="pp">
                        <hn id="nom">Léon</hn>
                    </div>
                    <p>"Je ne suis pas déçu par cette salle"</p>
                    <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div class="temoignage">
                    <div class="nom1">
                        <img src="./img/pp-Sandra.webp" alt="photo de profil d'utilsateur" id="pp">
                        <hn id="nom">Sandra</hn>
                    </div>
                    <p>"Excellent rapport qualité / prix"</p>
                    <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div class="temoignage">
                    <img src="./img/pp-mounir.webp" alt="photo de profil d'utilsateur" id="pp">
                    <hn id="nom">Mounir</hn>
                    <p>"Salle très propre, tranquille."</p>
                    <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div class="temoignage">
                    <img src="./img/pp.webp" alt="photo de profil d'utilsateur" id="pp">
                    <hn id="nom">Mohamed</hn>
                    <p>"Super! Personnel acceuillant et disponible "</p>
                    <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
        </section>
        <section class="product">
            <div class="product-container">
                <div class="Bloc_carousel">
                    <div class="article_bloc">
                        <div class="carre_texte">
                            <img src="./img/detente.webp" alt="femme détendu">
                            <div class="texte_bloc">
                                <h1>24 Avril 2022</h1>
                                <h2>5 astuces pour maigrir</h2>
                                <p>Boire régulièrement est le meilleur moyen d'éviter la déshydratation. Buvez de l'eau...</p>
                                <div class="btn_bloc"><a href="https://www.cosmopolitan.fr/,5-astuces-pour-perdre-du-poids-facilement,1990408.asp" target="blank">En savoir +</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Bloc_carousel">
                    <div class="article_bloc">
                        <div class="carre_texte">
                            <img src="./img/Habitude.webp" alt="Femme qui s'étire">
                            <div class="texte_bloc">
                                <h1>24 Avril 2022</h1>
                                <h2>Les bonnes habitudes du quotidien</h2>
                                <p>Il est parfois difficile d'être heureux au quotidien. Nous avons tous des engagements...</p>
                                <div class="btn_bloc"><a href="https://www.brunet.ca/sante/conseils-sante/20-bonnes-habitudes-a-prendre-pour-etre-en-sante/" target="blank">En savoir +</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Bloc_carousel">
                    <div class="article_bloc">
                        <div class="carre_texte">
                            <img src="./img/noix_cajoux.webp" alt="Noix de cajoux">
                            <div class="texte_bloc">
                                <h1>24 Avril 2022</h1>
                                <h2>Nos conseils nutrition !</h2>
                                <p>Pour fonctionner correctement, le corps humain a besoin d’énergie...</p>
                                <div class="btn_bloc"><a href="https://nutritionnisteurbain.ca/actualite/10-conseils-simples-12-nutritionnistes-bien-manger/" target="blank">En savoir +</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Bloc_carousel">
                    <div class="article_bloc">
                        <div class="carre_texte">
                            <img src="./img/muscle.webp" alt="biceps contracté">
                            <div class="texte_bloc">
                                <h1>24 Avril 2022</h1>
                                <h2>5 astuces pour se muscler</h2>
                                <p>Bien sûr, il faut faire des efforts pour obtenir des résultats, mais avec quelques...</p>
                                <div class="btn_bloc"><a href="https://dicodusport.fr/blog/musculation-5-astuces-pour-prendre-du-muscle-rapidement/" target="blank">En savoir +</a></div>
                            </div>
                        </div>
                    </div>
                </div>
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
    </div>
    <script src="./js/index.js"></script>
</body>
</html>