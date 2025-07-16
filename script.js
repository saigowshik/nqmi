// Smooth scroll to slide
function scrollToSlide(slideIndex) {
    const slide = document.getElementById(`slide-${slideIndex}`);
    if (slide) {
        slide.scrollIntoView({ behavior: 'smooth' });
    }
}

// EEG simulation
function simulateEEG() {
    const progress = document.getElementById('eeg-progress');
    const status = document.getElementById('eeg-status');

    progress.style.width = '0%';
    status.textContent = 'Reading brainwaves...';

    setTimeout(() => {
        progress.style.width = '100%';
        status.textContent = 'EEG Pattern Detected: Alpha waves (relaxed state)';
    }, 1000);
}

// Memory simulation
function simulateMemory() {
    const progress = document.getElementById('memory-progress');
    const status = document.getElementById('memory-status');

    progress.style.width = '0%';
    status.textContent = 'Forming quantum memory...';

    setTimeout(() => {
        progress.style.width = '100%';
        status.textContent = 'Memory formed: User prefers warm lighting when relaxed';
    }, 1500);
}

// Quantum Sync simulation
function simulateQuantumSync() {
    const progress = document.getElementById('quantum-progress');
    const status = document.getElementById('quantum-status');

    progress.style.width = '0%';
    status.textContent = 'Quantum entanglement in progress...';

    setTimeout(() => {
        progress.style.width = '100%';
        status.textContent = 'Synchronized: All 5 objects now know your preferences';
    }, 800);
}

// Prediction simulation
function simulatePrediction() {
    const progress = document.getElementById('prediction-progress');
    const status = document.getElementById('prediction-status');

    progress.style.width = '0%';
    status.textContent = 'Analyzing patterns for prediction...';

    setTimeout(() => {
        progress.style.width = '100%';
        status.textContent = 'Prediction: You will need coffee in 23 minutes. Preparing...';
    }, 2000);
}

// Auto-animate slides on load (optional visual entrance effect)
window.addEventListener('load', () => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.animationDelay = `${index * 0.2}s`;
    });
});

// Navigation click fix for GitHub Pages
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const index = this.getAttribute('onclick').match(/\d+/)[0];
        scrollToSlide(index);
    });
});
