/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(id) {
    document.getElementById(id).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onmouseover = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}