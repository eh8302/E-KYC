document.addEventListener("DOMContentLoaded", function() {
    // Fade in header and content
    const header = document.querySelector('header');
    const content = document.querySelector('.content-section');
  
    header.style.opacity = 0;
    content.style.opacity = 0;
  
    setTimeout(() => {
      header.style.transition = 'opacity 1s';
      header.style.opacity = 1;
    }, 500);
  
    setTimeout(() => {
      content.style.transition = 'opacity 1s';
      content.style.opacity = 1;
    }, 1000);
  
    // Parallax effect on video background
    const videoSection = document.querySelector('.video-section');
  
    window.addEventListener('scroll', function() {
      let scrollPosition = window.pageYOffset;
      videoSection.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    });
  });

  