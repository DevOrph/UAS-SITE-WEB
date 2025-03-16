document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.hero-carousel img');
    let currentIndex = 0;

    // Ajouter la classe 'active' à la première image au chargement de la page
    images[currentIndex].classList.add('active');

    function showNextImage() {
        // Supprimer la classe 'active' de l'image actuelle
        images[currentIndex].classList.remove('active');
        
        // Passer à l'image suivante, réinitialiser si la dernière image est atteinte
        currentIndex = (currentIndex + 1) % images.length;

        // Ajouter la classe 'active' à la nouvelle image
        images[currentIndex].classList.add('active');
    }

    // Définir un intervalle pour changer l'image toutes les 5 secondes
    setInterval(showNextImage, 5000);
});
