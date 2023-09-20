const catImage = document.getElementById('bottom-image');
let body = document.getElementsByTagName('body');
body = body[0]

catImage.addEventListener('mouseover', () => {
    const tooltip = document.createElement('div');
    if(!tooltip){
        showTooltip();
    }
});

catImage.addEventListener('mouseout', () => {
    hideTooltip();
});

catImage.addEventListener('touchstart', () => {
    showTooltip();
    setTimeout(() => {
        hideTooltip();
    }, 2000);
});

// Use touchend event to handle touch interactions
catImage.addEventListener('touchend', (event) => {
    event.preventDefault(); // Prevent the default touch event behavior
    const tooltip = document.createElement('div');
    if(!tooltip){
        showTooltip();
        setTimeout(() => {
            hideTooltip();
        }, 2000);
    }
    
});

function showTooltip() {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = 'Meow';
    body.appendChild(tooltip);
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip && tooltip.parentNode) {
        tooltip.parentNode.removeChild(tooltip);
    }
}
