import PopupWithImage from './PopupWithImage.js';
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

export default class Card {
  constructor(cardData, imagePopup) {
      this._cardData = cardData;
      this._cardElement = this._getTemplate();
      this._cardImage = this._cardElement.querySelector('.element__image');
      this._cardTitle = this._cardElement.querySelector('.element__title');
      this._cardButton = this._cardElement.querySelector('.element__button');
      this._deleteButton = this._cardElement.querySelector('.element__delete');
  
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
  
    _openPopup() {
      if (!this._imagePopup) {
        this._imagePopup = new PopupWithImage();
      }

    }
  
    _deleteElement = () => {
      this._cardElement.remove();
    }
  
    generateCard() {
      return this._cardElement;
    }
  }
  
   // Create and add cards to the container using the Card class
   initialCards.forEach(cardData => {
    const newCard = new Card(cardData);
    container.appendChild(newCard.generateCard());
  });
  
