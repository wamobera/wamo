document.addEventListener('DOMContentLoaded', () =>{
    const viewer = document.querySelector('.viewer');
    const pages = document.querySelectorAll('.kami');
    let currentIndex = 0;

    let touchStartX = 0;
    let touchEndX = 0;

    window.addEventListener('touchstart', (e) =>{
        touchStartX = e.touches[0].clientX;
        }, { passive: true});

    window.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe(); }, {passive: true});

    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX:
        const threshold = 30;

        const screenWidth = window.innerWidth;

        if (swipeDistance < -threshold) {
            if (currentIndex > 0) {
                currentIndex--;
            }
        }

        else if (swipeDistance > threshold) {
            if (currentIndex < pages.length - 1) {
                currentIndex++;
            }
        }     

        viewer.scrollTo({
            left: -currentIndex * screenWidth,
            behavior: 'auto'
        });
    }
});