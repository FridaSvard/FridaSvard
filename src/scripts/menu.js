import { gsap } from 'gsap';

document.getElementById('hamburger').addEventListener('click', () => {

    const navigation = document.getElementById('navigation');
    const lines = document.querySelectorAll('.line');
    // const logo = document.querySelector('.headerLogo');

    if (window.innerWidth < 768) {

        // logo.classList.toggle('hiddenLogo');

        if (navigation.classList.contains('hidden')) {

            // Show the menu with animation
            navigation.classList.remove('hidden');
            gsap.fromTo(navigation, { y: '-100%' }, { y: 0, duration: 0.5, ease: 'power2.inOut' });

            // Animate the hamburger lines to an 'X' shape
            gsap.to(lines[0], { rotation: 45, y: 12.5, duration: 0.3 });
            gsap.to(lines[1], { opacity: 0, duration: 0.3 });
            gsap.to(lines[2], { rotation: -45, y: -10, duration: 0.3 });
        } else {

            // Hide the menu with animation
            gsap.to(navigation, { y: '-100%', duration: 0.5, ease: 'power2.inOut', onComplete: () => navigation.classList.add('hidden'), });

            // Reset the hamburger lines to their original state
            gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3 });
            gsap.to(lines[1], { opacity: 1, duration: 0.3 });
            gsap.to(lines[2], { rotation: 0, y: 0, duration: 0.3 });
        }
    }
});


function checkDeviceWidth() {
    const navigation = document.getElementById('navigation');

    if (window.innerWidth < 768) {
        navigation.classList.add('hidden');
    } else {
        navigation.classList.remove('hidden');
        gsap.fromTo(navigation, { y: '100%' }, { y: 0, duration: 0 });
    }
}

// Check the device width on initial load
checkDeviceWidth();

// Add event listener for resize event
window.addEventListener('resize', checkDeviceWidth);