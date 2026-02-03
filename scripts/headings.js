document.addEventListener('DOMContentLoaded', () => {
    const headings = [
        "GO TO A PLACE<br>WHERE THEY WILL NEVER FIND YOU",
        "ESCAPE<br>TO PARADISE",
        "DISCOVER<br>NEW HORIZONS",
        "PACK YOUR DREAMS<br>AND JUST GO",
        "WANDER<br>WHERE WI-FI IS WEAK",
        "ESCAPE THE ORDINARY,<br>FIND YOURSELF",
        "TAKE THE SCENIC ROUTE<br>ALWAYS",
        "LEAVE FOOTPRINTS,<br>NOT WORRIES",
        "GO TO THAT PLACE<br>WHERE NO ONE KNOWS YOUR NAME",
        "THE WILDERNESS<br>IS WAITING FOR YOU",
        "LIFE IS SHORT,<br>TRAVEL OFTEN",
        "FIND PARADISE,<br>PACK LIGHT",
        "YOU ONLY LIVE ONCE,<br>SO TRAVEL",
        "GO FAR,<br>FEEL FREE",
        "DISCOVER PLACES<br>NO ONE KNOWS",
        "ADVENTURES<br>START HERE",
        "KEEP YOUR GO BAG<br>READY",
        "EXPLORE<br>BEYOND THE MAP",
        "LEAVE THE NOISE<br>BEHIND",
        "PLAN LESS,<br>WANDER MORE",
        "SEEK<br>NEW HORIZONS",
        "THE BEACH<br>IS YOUR FRIEND",
        "WHERE YOUR GETAWAY<br>BEGINS",
        "LOST<br>IS THE NEW FOUND",
        "DREAM IT, DO IT,<br>GO",
        "CHASE SUNSETS,<br>NOT DEADLINES",
        "VACATION MODE:<br>ACTIVATED",
        "GO ROGUE,<br>STAY INSPIRED",
        "TROPICAL VIBES,<br>NO TIES",
        "JOURNEY INTO<br>THE UNKNOWN",
        "LOSE YOURSELF,<br>FIND YOURSELF",
        "PACK UP, GET OUT,<br>EXPLORE",
        "GO NOW,<br>THANK YOURSELF LATER"
    ];

    let currentIndex = 0;
    const headingElement = document.querySelector('.heading-carousel');

    function fadeOut() {
        headingElement.style.opacity = '0';
    }

    function fadeIn() {
        headingElement.style.opacity = '1';
    }

    function changeHeading() {
        fadeOut();

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % headings.length;
            headingElement.innerHTML = headings[currentIndex];
            fadeIn();
        }, 1000);
    }

    headingElement.innerHTML = headings[0];

    setInterval(changeHeading, 8000);
});
