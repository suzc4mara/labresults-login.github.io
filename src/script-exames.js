window.addEventListener('DOMContentLoaded', function() {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function(ev) {
      if (!confirm('Do you really want to return to the login page?')) {
        ev.preventDefault();
      }
    });
  }
});
