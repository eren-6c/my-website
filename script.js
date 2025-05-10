// Initialize particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 90,
            density: {
                enable: true,
                value_area: 900
            }
        },
        color: {
            value: ["#00eaff", "#7f53ac", "#26d0ce"]
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.45,
            random: true
        },
        size: {
            value: 3.5,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 140,
            color: '#00eaff',
            opacity: 0.25,
            width: 1.2
        },
        move: {
            enable: true,
            speed: 0.7,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 120,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Add click animations to buttons
document.querySelectorAll('.win11-button').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'translateY(-2px)';
        }, 100);
    });
}); 