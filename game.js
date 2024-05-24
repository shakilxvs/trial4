document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    const scoreDisplay = document.getElementById('score');

    let score = 0;

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = Math.random() * 90 + '%';
        bubble.style.animationDuration = Math.random() * 3 + 2 + 's';
        gameContainer.appendChild(bubble);

        bubble.addEventListener('click', () => {
            bubble.remove();
            score++;
            scoreDisplay.textContent = score;
        });

        setTimeout(() => {
            bubble.remove();
        }, 5000);
    }

    setInterval(createBubble, 1000);
});
