window.addEventListener('load', function() {
    var iconContainer = document.querySelector('.icon-container');
    
    if (iconContainer) {
      setTimeout(function() {
        iconContainer.style.opacity = '1';  // Fade in the icons after page load
      }, 1000);  // Adjust the delay if needed
    }
  });
  