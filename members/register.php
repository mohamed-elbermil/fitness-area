<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription - Fitness-area</title>
    <link rel="stylesheet" href="./assets/css/members.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">

</head>
<body>
    <div class="form-container">
        <div class="bg-left"></div>
        <form action="register.php" method="post">
            <div class="input-container">
                <a href="../index.php" class="return">Retour à l'accueil</a>
                <h1>Création de votre compte</h1>
                <input type="text" placeholder="Nom" name="lastname">
                <input type="text" placeholder="Prénom" name="name">
                <input type="date" placeholder="Date de naissance" id="birthday" name="birthday">
                <input type="email" placeholder="Email" name="email">
                <input type="password" placeholder="Mot de passe" name="password">
                <input type="tel" placeholder="Téléphone" name="tel">
                <div class="cgu">
                    <input type="checkbox" name="cgu" id="cgu" required>
                    <p>J'accepte les <a href="#">conditions d'utilisations</a></p>
                </div>
                <input type="submit" placeholder="Envoyer">
            </div>

        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script>
    flatpickr("input[type='date']", {
        dateFormat: "d-m-Y",
        theme: "light" // Il existe aussi "dark", "material_blue", etc.
    });

</script>
    
</body>
</html>