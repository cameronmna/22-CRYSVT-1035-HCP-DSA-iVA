window.addEventListener('load', function() {

  // Define the function that creates and shows the modal
  function showModal(element) {
    console.log(element);

    let actualID = element.nextElementSibling.id;
    console.log(actualID);
    // Get the content of the element with the same ID as the clicked element
    const content = document.getElementById(actualID);
    content.style.display = 'block';

    // Add an event listener to all elements with the "modal-trigger" class
    const modalContainer = document.getElementsByClassName('modal-close');
    for (let i = 0; i < modalContainer.length; i++) {

    }

    // Close the modal when the user clicks the close button or outside of it
    function closeModal() {
      document.body.removeChild(modalContainer);
    }
    modalContainer.addEventListener('click', (event) => {
      if (event.target === modalContainer) {
        closeModal();
      }
    });
    closeButton.addEventListener('click', closeModal);
  }

  // Add an event listener to all elements with the "modal-trigger" class
  const modalTriggers = document.getElementsByClassName('modal-trigger');
  for (let i = 0; i < modalTriggers.length; i++) {
    const trigger = modalTriggers[i];
    trigger.addEventListener('click', () => showModal(trigger));
  }
});