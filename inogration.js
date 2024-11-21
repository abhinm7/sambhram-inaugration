document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    const button = document.getElementById('startButton');
    
    title.classList.add('fade-in');
    subtitle.classList.add('fade-in');
    button.classList.add('fade-in');

    // Add floating particle effect
    createFloatingParticles();
});

function createParticles() {
    const particles = document.querySelector('.particles');
    for(let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        particles.appendChild(particle);
    }
}

document.getElementById('startButton').addEventListener('click', function() {
    // Hide initial elements
    const elementsToHide = ['.title', '.subtitle', '.description', '#startButton'];
    elementsToHide.forEach(selector => {
        document.querySelector(selector).style.display = 'none';
    });

    // Show timer
    const timerContainer = document.getElementById('timerContainer');
    const timerElement = document.getElementById('timer');
    timerContainer.style.display = 'flex';
    timerContainer.classList.add('show');
    
    let timeLeft = 5;
    
    const countdownInterval = setInterval(() => {
        timeLeft--;
        
        timerElement.classList.remove('number-change');
        void timerElement.offsetWidth; // Force reflow
        timerElement.classList.add('number-change');
        
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            
            // Add final animation to timer
            timerElement.classList.add('final-animation');
            
            // Create blast effect
            createBlastEffect();
            
            // Add pop effects before redirect
            setTimeout(createPopEffect, 1000);
            
            // Redirect after animations complete
            setTimeout(() => {
                window.location.href = 'https://www.shreedevisambhram.in/';
            }, 3000); // Increased delay to allow for pop effects
        }
    }, 1000);
});

function createExplosionEffect() {
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    document.body.appendChild(explosion);
    
    for(let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        particle.style.transform = `rotate(${i * 18}deg) translateY(-100px)`;
        explosion.appendChild(particle);
    }
}

function createFloatingParticles() {
    const container = document.createElement('div');
    container.className = 'floating-particles';
    document.body.appendChild(container);

    for(let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positions and timings
        const startX = Math.random() * window.innerWidth;
        const midX = startX + (Math.random() - 0.5) * 200;
        const endX = startX + (Math.random() - 0.5) * 400;
        const midY = Math.random() * window.innerHeight * 0.6;
        const duration = 5 + Math.random() * 5;
        const delay = Math.random() * -10;

        particle.style.setProperty('--start-x', `${startX}px`);
        particle.style.setProperty('--mid-x', `${midX}px`);
        particle.style.setProperty('--end-x', `${endX}px`);
        particle.style.setProperty('--mid-y', `${midY}px`);
        particle.style.setProperty('--duration', `${duration}s`);
        particle.style.setProperty('--delay', `${delay}s`);

        container.appendChild(particle);
    }
}

function createBlastEffect() {
    const corners = [
        { x: '0%', y: '0%' },     // Top left
        { x: '100%', y: '0%' },   // Top right
        { x: '0%', y: '100%' },   // Bottom left
        { x: '100%', y: '100%' }  // Bottom right
    ];

    corners.forEach((corner, index) => {
        setTimeout(() => {
            const container = document.createElement('div');
            container.className = 'blast-container';
            container.style.transform = `translate(${corner.x}, ${corner.y})`;
            document.body.appendChild(container);

            // Create flash effect for each corner
            const flash = document.createElement('div');
            flash.className = 'final-flash';
            container.appendChild(flash);

            // Create blast ring
            const ring = document.createElement('div');
            ring.className = 'blast-ring';
            container.appendChild(ring);

            // Create particles
            for(let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'blast-particle';
                
                const angle = (i * 18) + Math.random() * 45;
                const distance = 100 + Math.random() * 200;
                
                const x = Math.cos(angle * Math.PI / 180) * distance;
                const y = Math.sin(angle * Math.PI / 180) * distance;
                
                particle.style.setProperty('--x', `${x}px`);
                particle.style.setProperty('--y', `${y}px`);
                
                const size = 5 + Math.random() * 15;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                const duration = 1 + Math.random() * 0.8;
                particle.style.animation = `blastParticle ${duration}s cubic-bezier(0.2, 0.8, 0.4, 1) forwards`;
                
                container.appendChild(particle);
            }

            // Cleanup after animation
            setTimeout(() => container.remove(), 3000);
        }, index * 100); // Stagger each corner blast by 100ms
    });
}

function createPopEffect() {
    const colors = ['#ffd700', '#ff4e50', '#ffffff'];
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const pop = document.createElement('div');
            pop.className = 'pop-effect';
            pop.style.left = `${Math.random() * 100}%`;
            pop.style.top = `${Math.random() * 100}%`;
            pop.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.appendChild(pop);

            // Create sparkles around pop
            for (let j = 0; j < 6; j++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.setProperty('--angle', `${j * 60}deg`);
                pop.appendChild(sparkle);
            }

            // Cleanup
            setTimeout(() => pop.remove(), 1000);
        }, i * 200);
    }
}
