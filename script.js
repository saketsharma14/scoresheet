
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


    function getNextSaturday1PM() {
        const now = new Date();
        const target = new Date();


        const daysUntilSaturday = (6 - now.getDay() + 7) % 7;


        if (daysUntilSaturday === 0 && now.getHours() < 13) {
            target.setHours(13, 0, 0, 0);
        } else if (daysUntilSaturday === 0) {

            target.setDate(now.getDate() + 7);
            target.setHours(13, 0, 0, 0);
        } else {

            target.setDate(now.getDate() + daysUntilSaturday);
            target.setHours(13, 0, 0, 0);
        }

        return target;
    }

    const targetDate = getNextSaturday1PM();

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            overlay.classList.add('hidden');
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

document.addEventListener('DOMContentLoaded', () => {
    calculateAndSort();
    startCountdown();
});