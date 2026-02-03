document.addEventListener('DOMContentLoaded', () => {
    const banners = document.querySelectorAll('.banner');
    let currentBanner = 0;

    function nextBanner() {
        banners[currentBanner].classList.remove('active');
        currentBanner = (currentBanner + 1) % banners.length;
        banners[currentBanner].classList.add('active');
    }

    setInterval(nextBanner, 8000);
});
