// Fonction pour détecter si l'appareil est un iPhone ou un iPad
function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }
  
  // Fonction pour ajouter ou supprimer la classe 'show' au clic
  function toggleDescription(cardId) {
    var description = document.getElementById('description' + cardId);
    description.classList.toggle('show');
  }
  
  // Attacher un gestionnaire d'événements de clic à chaque carte
  document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card, index) {
      card.addEventListener('click', function() {
        toggleDescription(index + 1);
      });
    });
  });