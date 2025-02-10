<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription - Fitness-area</title>
    <link rel="stylesheet" href="./assets/css/members.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://accounts.google.com/gsi/client" async defer></script>


</head>
<body>
    <div class="form-container">
        <div class="bg-left"></div>
        <form action="register_process.php" method="POST">
            <div class="input-container">
                <a href="../index.php" class="return">Retour à l'accueil</a>
                <h1>Création de votre compte</h1>
                <div id="google-one-tap-button">ss</div>
                <input type="text" placeholder="Nom" name="lastname">
                <input type="text" placeholder="Prénom" name="name" id="name">
                <div class="message-1">
                <p>Enchanté de vous connaitre !</p>
                <i class="fa-solid fa-hand"></i>    
                </div>

                <input type="date" placeholder="Date de naissance" id="birthday" name="birthday">
                <input type="email" placeholder="Email" name="email">
                <input type="password" placeholder="Mot de passe" name="password" max->
                <input type="tel" placeholder="Téléphone" name="tel"id="tel">
                <div class="cgu">
                    <input type="checkbox" name="cgu" id="cgu" required>
                    <p>J'accepte les <a href="#">conditions d'utilisations</a></p>
                </div>
                <input type="submit" value="Envoyer" name="send">
            </div>
            <div id="g_id_onload"
     data-client_id="YOUR_GOOGLE_CLIENT_ID"
     data-login_uri="http://localhost:3000"
     data-your_own_param_1_to_login="any_value"
     data-your_own_param_2_to_login="any_value">
</div>
       
    </form>
    </div>
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script src="./assets/js/members.js"></script>
</body>
</html>