(() =>{
  const MOBILE_WIDTH = 1024;
  
  function scrollToContent (link, isMobile) {
    if (isMobile && window.getWindowWidth() > MOBILE_WIDTH) {
      return;
    }
  
    const href = link.getAttribute('href').substring(1);

    if (Boolean(href)) {
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;
    
      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
    }
  }
  
  document.querySelectorAll('.js-smooth-scrolling-mobil').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
  
        scrollToContent(this, false);
    });
  });

})();


