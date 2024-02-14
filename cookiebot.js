document.addEventListener("DOMContentLoaded", function() {
    var cookieAlert = document.getElementById('cookie-alert');
    var acceptCookieBtn = document.getElementById('accept-cookie');
  
    acceptCookieBtn.addEventListener('click', function() {
      // Set a cookie with expiry date 30 days from now
      var expiryDate = new Date();
      expiryDate.setTime(expiryDate.getTime() + (30 * 24 * 60 * 60 * 1000));
      document.cookie = "cookie_accepted=true; expires=" + expiryDate.toUTCString() + "; path=/";
  
      // Hide the cookie alert
      cookieAlert.style.display = 'none';
    });
  
    // Check if the cookie is set
    var cookiesAccepted = document.cookie.split(';').some(function(cookie) {
      return cookie.trim().startsWith('cookie_accepted=');
    });
  
    // Hide the cookie alert if the cookie is already accepted
    if (cookiesAccepted) {
      cookieAlert.style.display = 'cookie';
    }
  });