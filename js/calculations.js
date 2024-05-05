// Select the sky element
var sky = document.querySelector('.sky');

// Add the event listener
window.addEventListener('scroll', function() {
    // Calculate the new position
    var scrollPosition = window.pageYOffset;

    // Update the position of the sky
    sky.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

