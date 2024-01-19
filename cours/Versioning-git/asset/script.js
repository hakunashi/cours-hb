document.addEventListener('DOMContentLoaded', function () {
    var lastScrollTop = 0;
    var header = document.getElementById('site-header');
  
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.classList.add('hidden');
      } else {
        // Scrolling up
        header.classList.remove('hidden');
      }
  
      lastScrollTop = scrollTop;
    });
  });
  