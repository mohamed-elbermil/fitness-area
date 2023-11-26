<html lang="en">

<head>

    <meta charset="UTF-8">

    <link rel="apple-touch-icon" type="image/png" href="https://cpwebassets.codepen.io/assets/favicon/apple-touch-icon-5ae1a0698dcc2402e9712f7d01ed509a57814f994c660df9f7a952f3060705ee.png">
    <meta name="apple-mobile-web-app-title" content="CodePen">

    <link rel="shortcut icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico">

    <link rel="mask-icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/logo-pin-8f3771b1072e3c38bd662872f6b673a722f4b3ca2421637d5596661b4e2132cc.svg" color="#111">


    <title>CodePen - FAQ</title>




    <style>
        @import url("https://fonts.googleapis.com/css?family=Hind:300,400&display=swap");


        .container {
            margin: 0 auto;
            padding: 4rem;
            width: 48rem;
        }

.accordion .accordion-item {
    border-bottom: 1px solid #e5e5e5;
    background: #e05a30;
    color: #fff;
}

        .accordion .accordion-item button[aria-expanded=true] {
            border-bottom: 1px solid #03b5d2;
        }

        .accordion button {
            position: relative;
            text-align: left;
            width: 100%;
            padding: 1em 1em;
            color: #7288a2;
            font-size: 1.15rem;
            font-weight: 400;
            border: none;
            background: none;
            outline: none;
        }

        .accordion button:hover,
        .accordion button:focus {
            cursor: pointer;
            color: #ff5722;
        }

        .accordion button:hover::after,
        .accordion button:focus::after {
            cursor: pointer;
            color: #03b5d2;
            border: 1px solid #03b5d2;
        }

        .accordion button .accordion-title {
    padding: 1em 1.5em 1em 0;
    color: #fff;
}

.accordion button .icon {
    display: inline-block;
    position: absolute;
    top: 18px;
    right: 30px;
    width: 22px;
    height: 22px;
    border: 1px solid;
    border-radius: 22px;
    color: #fff;
}

        .accordion button .icon::before {
            display: block;
            position: absolute;
            content: "";
            top: 9px;
            left: 5px;
            width: 10px;
            height: 2px;
            background: currentColor;
        }

        .accordion button .icon::after {
            display: block;
            position: absolute;
            content: "";
            top: 5px;
            left: 9px;
            width: 2px;
            height: 10px;
            background: currentColor;
        }

        .accordion button[aria-expanded=true] {
            color: #627183;
        }

        .accordion button[aria-expanded=true] .icon::after {
            width: 0;
        }

        .accordion button[aria-expanded=true]+.accordion-content {
            opacity: 1;
            max-height: 11em;
            transition: all 200ms linear;
            will-change: opacity, max-height;
        }

        .accordion .accordion-content {
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: opacity 200ms linear, max-height 200ms linear;
            will-change: opacity, max-height;
        }

        .accordion .accordion-content p {
            font-size: 1rem;
            font-weight: 300;
            margin: 2em 21px;
        }

        @media screen and (max-width:768px) {
            .container {

                padding: 1em;
                width: 94%;
            }

            .accordion button .accordion-title {
                padding: 1em 1.5em 1em 6px;
                font-size: 68%;
            }

            .accordion .accordion-content p {
                font-size: 13px;
                font-weight: 300;
                margin: 2em 5%;
            }
        }
    </style>

    <script>
        window.console = window.console || function(t) {};
    </script>



    <script>
        if (document.location.search.match(/type=embed/gi)) {
            window.parent.postMessage("resize", "*");
        }
    </script>


</head>

<body translate="no">
    <div class="container">
        <h2>Nous répondons à vos questions !</h2>
        <div class="accordion">
            <div class="accordion-item">
                <button id="accordion-button-1" aria-expanded="true"><span class="accordion-title">Quelles sont les horaires de la salle ?</span><span class="icon" aria-hidden="true"></span></button>
                <div class="accordion-content">
                    <p>Fitness-Area vous ouvre ses portes du Lundi au Dimanche de 6h30 à 22h00</p>
                </div>
            </div>
            <div class="accordion-item">
                <button id="accordion-button-2" aria-expanded="false"><span class="accordion-title">Pourquoi choisir Fitness-Area ?</span><span class="icon" aria-hidden="true"></span></button>
                <div class="accordion-content">
                    <p>Voici les avantages en t'inscrivant chez Fitness-Area : La salle est bien desservie en transport en commun, tu peux donc t'y rendre en bus, train, métro et en tram le plus dur est de choisir. De plus elle est située à côté du magasin Intersport si tu souhaites t'équiper avant de t'entrainer ! Et enfin elle possède un grand parking pour se garer.</p>
                </div>
            </div>
            <div class="accordion-item">
                <button id="accordion-button-3" aria-expanded="false"><span class="accordion-title">Que faire si j'ai perdu ma carte ?</span><span class="icon" aria-hidden="true"></span></button>
                <div class="accordion-content">
                    <p>Si vous avez perdu votre carte de membre ou si vous vous l'êtes fait volée, vous pouvez acheter une nouvelle carte à l'accueil de la salle. Votre ancienne carte sera alors désactivée. Cette nouvelle carte vous sera facturée au prix de 5,00€.</p>
                </div>
            </div>
            <div class="accordion-item">
                <button id="accordion-button-4" aria-expanded="false"><span class="accordion-title">Est ce que la salle est ouverte pendant les jours fériés ?</span><span class="icon" aria-hidden="true"></span></button>
                <div class="accordion-content">
                    <p>La salle ouvre ses portes du Lundi au Dimanche de 6h30 à 22h00, pendant les vacances et les jours fériés. S'il y a un empêchement de notre côté nous te tiendrons infomés sur nos réseaux sociaux.</p>
                </div>
            </div>
            <div class="accordion-item">
                <button id="accordion-button-5" aria-expanded="false"><span class="accordion-title">Existe-t-il d'autre club Fitness-Area en France ?</span><span class="icon" aria-hidden="true"></span></button>
                <div class="accordion-content">
                    <p>Non, Fitness-Area n'est pas une franchise. Nous avons choisi d'être indépendant pour que l'on puisse installer une ambiance familiale et conviviale, où coachs et adhérents se connaissent plus qu'ils ne se côtoient. À l'instar des franchises, le club indépendant est une entreprise où les coachs doivent disposer d'un brevet d'État spécifique, c'est rassurant non ? </p>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-1b93190375e9ccc259df3a57c1abc0e64599724ae30d7ea4c6877eb615f89387.js"></script>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script id="rendered-js">
   //FAQ
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));



    </script>







</body>

</html>