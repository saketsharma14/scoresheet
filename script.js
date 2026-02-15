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

document.addEventListener('DOMContentLoaded', () => {
    calculateAndSort();
    showPopup();
});