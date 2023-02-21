// Define the function that creates and shows the modal
function showModal(element) {
  // Get the content of the element with the same ID as the clicked element
  const content = document.getElementById(element.id + '-content').innerHTML;

  // Create the modal container
  const modalContainer = document.createElement('div');
  modalContainer.className = 'modal-container';

  // Create the modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  modalContent.innerHTML = content;

  // Add the content to the container and add the container to the page
  modalContainer.appendChild(modalContent);
  document.body.appendChild(modalContainer);

  // Create a close button
  const closeButton = document.createElement('button');
  closeButton.className = 'modal-close';
  closeButton.innerHTML = '&times;';
  modalContent.appendChild(closeButton);

  // Center the modal vertically and horizontally
  modalContent.style.top = `${(window.innerHeight - modalContent.offsetHeight) / 2}px`;
  modalContent.style.left = `${(window.innerWidth - modalContent.offsetWidth) / 2}px`;

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