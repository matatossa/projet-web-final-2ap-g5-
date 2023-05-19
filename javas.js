// Liste des utilisateurs inscrits
const users = [];

// Fonction d'inscription
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Création d'un objet utilisateur avec les données d'inscription
  const user = { email, password };

  // Enregistrement de l'utilisateur dans le sessionStorage
  sessionStorage.setItem("user", JSON.stringify(user));

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    alert("Cet email est déjà enregistré !");
    return;
  }

  if (confirmPassword == password) {
    alert("Inscription réussie !");
    resetForm();

    // Switch de l'affichage des champs de formulaire
    toggleElements();
  } else {
    alert("Les champs mot de passe et confirmer le mot de passe ne matche pas !")
  }
}

// Fonction de connexion
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Recherche de l'utilisateur dans la liste des utilisateurs

  const user = JSON.parse(sessionStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    alert("Connexion réussie !");
    // Redirection vers une autre page
    window.location.href = "site_com.html";
    resetForm();
  } else {
    alert("Email ou mot de passe incorrect !");
  }
}

// Réinitialisation des champs de formulaire
function resetForm() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("loginEmail").value = "";
  document.getElementById("loginPassword").value = "";
}

// Switch de l'affichage des champs de formulaire
function toggleElements() {
  var element1 = document.getElementById("login");
  var element2 = document.getElementById("signup");
  var btn = document.getElementById("switch");

  if (element1.style.display === "none") {
    element1.style.display = "block";
    element2.style.display = "none";
    btn.value = "Switch to sign up";
  } else {
    element1.style.display = "none";
    element2.style.display = "block";
    btn.value = "Switch to log in";
  }
}
