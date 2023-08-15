const template = document.querySelector('.elements');
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

class Card {
  constructor(cardData) {
    this._cardData = cardData;
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector('.element__image');
    this._cardTitle = this._cardElement.querySelector('.element__title');
    this._cardButton = this._cardElement.querySelector('.element__button');
    // this._deleteButton = this._cardElement.querySelector('.element__delete');
    this._deleteButton = this._cardElement.querySelector('.delete__submit');
    this._cardImage.src = this._cardData.link;
    this._cardTitle.innerHTML = this._cardData.name;

    this._cardButton.addEventListener('click', this._selectPicture);
    this._cardButton.addEventListener('click', this._activeLike);
    this._cardImage.addEventListener('click', this._openPopup); 
    this._deleteButton.addEventListener('click', this._deleteElement);
  }

  _getTemplate() {
    const clone = template.content.cloneNode(true);
    return clone.querySelector('.element');
  }

  _selectPicture = () => {
    const pictureName = this._cardData.name;
    console.log(pictureName);
  }

  _activeLike = (evt) => {
    evt.target.classList.toggle('element__button-active');
  }

  _openPopup = () => {
    popupImageFile.src = this._cardData.link;
    popupImageTitle.textContent = this._cardData.name;
    openFormsZoom(popupImage);
    popupImage.classList.add('zoom_active');
  }

  _deleteElement = () => {
    this._cardElement.remove();
  }

  generateCard() {
    return this._cardElement;
  }
}

function addCardToContainer(cardData) {
  const newCard = new Card(cardData);
  const firstElement = container.firstChild;
  container.insertBefore(newCard.generateCard(), firstElement);
}

initialCards.forEach(cardData => {
  addCardToContainer(cardData);
});

// Delete Element
// const deleteButtons = document.querySelectorAll('.element__delete');
// const deleteButtons = document.querySelectorAll('.delete__submit');
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