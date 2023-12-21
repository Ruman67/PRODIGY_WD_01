
    const navbar = document.getElementById('navbar');
    function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
      }
      function hideSidebar(){
        const hideSidebar = document.querySelector('.sidebar')
       hideSidebar.style.display = 'none'
      }

      function handleScroll() {
        if (window.scrollY > 100) { // Change 100 to the scroll position where you want the style to change
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
      
      // Event listener for scroll
      window.addEventListener('scroll', handleScroll);