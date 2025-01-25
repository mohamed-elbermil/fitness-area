<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nous contacter - Fitness-area</title>

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

    <link rel="stylesheet" href="./css/Style.css">
    <link rel="stylesheet" href="./css/variables.css">
</head>

<body>

    <div id="barre" style="width: 96.9574px;"></div>

    <header class="nav_header scroll">
        <?php
        include('./common/menu.php')
        ?>
    </header>


    <main>
        <div class="form-contact">
            <div class="map">
                <div class="iframe-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89249.37268819031!2d4.9615966405514715!3d45.649960297686846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c3de8d150e61%3A0x2485c8f2f91e70c5!2sPorte%20des%20Alpes!5e0!3m2!1sfr!2sfr!4v1733673680326!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="form-company">
                    <div class="form-element">
                        <span>Adresse</span>
                        <p>9 allée du Lorem</p>
                    </div>
                    <div class="form-element">
                        <span>Email</span>
                        <p>contact@fitness-area.fr</p>
                    </div>
                    <div class="form-element">
                        <span>Téléphone</span>
                        <p>04.XX.68.32.16</p>
                    </div>
                    <div class="form-element">
                        <span>Instagram</span>
                        <p>@fitnessarea8</p>
                    </div>
                </div>
            </div>
            <form class="form-customer" action="/submit_form" method="POST">
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" placeholder="Nom" required>

                <label for="prenom">Prénom :</label>
                <input type="text" id="prenom" name="prenom" placeholder="Prénom" required>

                <label for="telephone">Numéro de téléphone :</label>
                <input type="tel" id="telephone" name="telephone" placeholder="Numéro de téléphone" required>

                <label for="email">Email :</label>
                <input type="email" id="email" name="email" placeholder="Email" required>

                <label for="commentary">Commentaire :</label>
                <textarea id="commentary" name="commentary" placeholder="Commentaire" required></textarea>

                <button type="submit" id="send-btn">Envoyer</button>
            </form>

        </div>


    </main>
    <footer>
        <?php
        include('./common/footer.php')
        ?>
    </footer>

<script src="./js/index.js"></script>
</body>

</html>