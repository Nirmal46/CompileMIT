    // Mobile menu toggle
    document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
      });
  
      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
  
      // Intersection Observer for animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });
  
      document.querySelectorAll('.feature-card, .member-card').forEach((el) => {
        observer.observe(el);
      });
           