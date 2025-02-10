<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fitness_area";

try {
    $bdd = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur : " . $e->getMessage()); 
}

if (isset($_POST['send'])) {
    $lastname = $_POST['lastname'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); 
    $tel = $_POST['tel'];

    $requete = $bdd->prepare('INSERT INTO users (lastname, name, email, password, tel) VALUES (:lastname, :name, :email, :password, :tel)');
    
    $requete->execute([
        "lastname" => $lastname,
        "name" => $name,
        "email" => $email,
        "password" => $password,
        "tel" => $tel,
    ]);

    echo "Inscription réussie !";
}
?>
