function calculateAndSort() {
    const tbody = document.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let total = 0;
        for (let i = 1; i < cells.length - 1; i++) {
            total += parseInt(cells[i].textContent) || 0;
        }
        cells[cells.length - 1].textContent = total;
    });
    rows.sort((a, b) => {
        const totalA = parseInt(a.querySelector('td:last-child').textContent) || 0;
        const totalB = parseInt(b.querySelector('td:last-child').textContent) || 0;
        return totalB - totalA;
    });
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
}

function startCountdown() {
    const overlay = document.getElementById('countdownOverlay');
    const timerDisplay = document.getElementById('timerDisplay');

    function getTargetDate() {
        const target = new Date('2026-01-26T16:00:00');
        return target;
    }

    const targetDate = getTargetDate();

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            overlay.classList.add('hidden');
            // Show popup after countdown ends
            showPopup();
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerDisplay.textContent =
            `${String(days).padStart(2, '0')} : ${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function showPopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    const popupClose = document.getElementById('popupClose');

    // Show popup after 4 seconds
    setTimeout(() => {
        popupOverlay.classList.add('show');
    }, 4000);

    // Close popup when close button is clicked
    popupClose.addEventListener('click', () => {
        popupOverlay.classList.remove('show');
    });

    // Close popup when clicking outside the image
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.classList.remove('show');
        }
    });
}

function checkIfRevealed() {
    const targetDate = new Date('2026-01-26T16:00:00');
    const now = new Date().getTime();
    
    // If we're already past the reveal date, hide countdown and show popup
    if (now >= targetDate) {
        const overlay = document.getElementById('countdownOverlay');
        overlay.classList.add('hidden');
        showPopup();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    calculateAndSort();
    startCountdown();
    checkIfRevealed();
});