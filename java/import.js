import { Card } from "../java/Card";

const container = document.querySelector('.container');
const initialCards = [
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
  const newCard = new Card(cardData, '.element-template');
  const firstElement = container.firstChild;
  container.insertBefore(newCard.generateCard(), firstElement);
}

initialCards.forEach(cardData => {
  addCardToContainer(cardData);
});

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
