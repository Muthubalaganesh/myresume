document.addEventListener('DOMContentLoaded', function() {
    let countdownVideoEl = document.getElementById('countdown-video');
    let countdownSoundEl = document.getElementById('countdown-sound');
    let mainContentEl = document.getElementById('main-content');

    let countdownInterval = setInterval(() => {
        countdownSoundEl.play();
    }, 1000);

    countdownVideoEl.onplaying = function() {
        countdownSoundEl.play();
    };

    countdownVideoEl.onended = function() {
        clearInterval(countdownInterval);
        document.getElementById('countdown').style.display = 'none';
        mainContentEl.style.display = 'block';
    };
});

function showContent(sectionId) {
    document.querySelectorAll('.section-content').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('click', () => {
        document.getElementById('click-sound').play();
    });
});
