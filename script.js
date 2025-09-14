
/* Simple script to set active nav link and year */
document.addEventListener('DOMContentLoaded', function(){
  // set year
  var y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
  // highlight active nav link based on filename
  var links = document.querySelectorAll('nav a');
  var path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function(a){ if(a.getAttribute('href') === path) a.classList.add('active'); });
});
