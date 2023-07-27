export const template = document.querySelector('.elements');
export const container = document.querySelector('.container');
export const initialCards = [
  {
    name: "Lembah Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Danau Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Pegunungan Gundul",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Gunung Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Taman Nasional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

function addCardToContainer(cardData) {
    const newCard = new Card(cardData);
    const firstElement = container.firstChild;
    container.insertBefore(newCard.generateCard(), firstElement);
  }
  
  // Function to initialize cards from initial data
  function initializeCards() {
    initialCards.forEach(cardData => {
      addCardToContainer(cardData);
    });
  }
  
  // Call the function to initialize cards when the DOM is ready
  document.addEventListener("DOMContentLoaded", initializeCards);
  
  // Delete Element
  const deleteButtons = document.querySelectorAll('.element__delete');
  
  function deleteElement(event) {
    const deleteButton = event.currentTarget;
    const card = deleteButton.closest('.element');
    const clonedCard = card.cloneNode(true);
    card.remove();
    container.appendChild(clonedCard);
  }
  
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener('click', deleteElement);
  });

