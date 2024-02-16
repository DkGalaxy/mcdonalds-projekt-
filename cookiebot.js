document.addEventListener("DOMContentLoaded", function() {
    var cookieAlert = document.getElementById('cookie-alert');
    var acceptCookieBtn = document.getElementById('accept-cookie');
    var declineCookieBtn = document.getElementById('decline-cookie');

    acceptCookieBtn.addEventListener('click', function() {
    acceptCookie();
  });

    declineCookieBtn.addEventListener('click',function(){
      if(confirm("are u sure that u want to decline them cookies?")){
        loopDeclineCookies();
    }
      });

      // Set a cookie with expiry date 30 days from now
      function acceptCookie(){
      var expiryDate = new Date();
      expiryDate.setTime(expiryDate.getTime() + (30 * 24 * 60 * 60 * 1000));
      document.cookie = "cookie_accepted=true; expires=" + expiryDate.toUTCString() + "; path=/";
  
      // Hide the cookie alert
      cookieAlert.style.display = 'none';
    };
    function declineCookie()
    {
      document.cookie = "cookie_accepted=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      cookieAlert.style.display = 'none';
      alert("Cookies have been declined.");

    }
    function loopDeclineCookies() {
      var confirmed = confirm("Are you sure you want to decline cookies?");
      if (confirmed) {
        declineCookie();
      }
    }

    
  
    // Check if the cookie is set
    var cookiesAccepted = document.cookie.split(';').some(function(cookie) {
      return cookie.trim().startsWith('cookie_accepted=');
    });
  
    // Hide the cookie alert if the cookie is already accepted
    if (cookiesAccepted) {
      cookieAlert.style.display = 'cookie';
    }
    
  });