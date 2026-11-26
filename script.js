// Affiche l'image survolée / sélectionnée dans le panneau d'aperçu
function upDate(previewPic) {
  console.log("upDate : " + previewPic.alt);
  var panneau = document.getElementById("image");
  panneau.style.backgroundImage = "url('" + previewPic.src + "')";
  panneau.innerHTML = previewPic.alt;
}

// Rétablit l'état initial du panneau d'aperçu
function unDo() {
  console.log("unDo : retour à l'état initial");
  var panneau = document.getElementById("image");
  panneau.style.backgroundImage = "none";
  panneau.innerHTML = "Survolez ou sélectionnez une image ci-dessous pour l’afficher ici.";
}

// Appelée au chargement de la page : ajoute tabindex à chaque image
function addTabIndex() {
  console.log("Le chargement de la page a déclenché addTabIndex()");
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("tabindex ajouté à l'image " + (i + 1));
  }
}
