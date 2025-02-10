window.onload = function () {
    google.accounts.id.initialize({
      client_id: "46907862741-kcj3cvf04djkmja2mreii8cf0krshsr4.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });

    google.accounts.id.prompt();
    google.accounts.id.renderButton(
      document.getElementById("google-one-tap-button"), {
        theme: "outline",       
        size: "large",           
        type: "standard",        
        shape: "rectangular"   
      }
    );
  };
  function handleCredentialResponse(response) {
    console.log("Token JWT reçu :", response.credential);
    const data = parseJwt(response.credential);
    console.log("Utilisateur connecté :", data);
    // Afficher un message de bienvenue
    document.getElementById("welcome").innerHTML =
      "Bienvenue " + data.name + " (" + data.email + ")";
  }
  // Fonction pour décoder le JWT
  function parseJwt(token) {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  }
//   -----

// Telephone input
const tel = document.getElementById('tel');
    tel.addEventListener("input", function(){
        inputValue = this.value.replace(/\D/g, "");
        if (inputValue.length > 10) {
            inputValue = inputValue.slice(0,10);
        }
        formattedValue = inputValue.replace(/(\d{2})(?=\d)/g, "$1 ");
        this.value = formattedValue;   
    })
// ---

// Planning
flatpickr("input[type='date']", {
  dateFormat: "d-m-Y",
  theme: "light"
});