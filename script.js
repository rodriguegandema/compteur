// Main Script – Javascript

let score = 0;
const MAX_SCORE = 20;

// Variable d'affichage du compteur
const compteur = document.querySelector('.compteur');

// Mes boutons 
const btnAjouterPlus1 = document.querySelector('#bouton');
const boutonEffacer = document.querySelector('.effacer');


function gererAffichage() {
  compteur.textContent = score ;
  // La couleur du compteur
  if(score >= 10) {
    compteur.style.color = '#2F4F4F';
  } else{
    compteur.style.color = '#8B4513';
  }
}


btnAjouterPlus1.addEventListener('click', () => {
  if(score < MAX_SCORE) {
    score += 1;
    gererAffichage();
  }
});

boutonEffacer.addEventListener('click', () => {
  score = 0;
  gererAffichage();
});