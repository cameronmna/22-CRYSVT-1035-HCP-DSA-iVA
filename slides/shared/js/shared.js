window.addEventListener('load', function() {

  var modals = document.querySelectorAll(".modal");
  var buttons = document.querySelectorAll(".modal-button");
  var closeButtons = document.querySelectorAll(".close");

  buttons.forEach(function(button, index) {
    button.addEventListener("click", function() {
      modals[index].style.display = "block";
    });
  });

  closeButtons.forEach(function(closeButton) {
    closeButton.addEventListener("click", function() {
      modals.forEach(function(modal) {
        modal.style.display = "none";
      });
    });
  });
});