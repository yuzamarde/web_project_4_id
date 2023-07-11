const template = document.querySelector('.elements');
export class Card {
  constructor(cardData, templateSelector) {
    this._cardData = cardData;
    this._cardElement = this._getTemplate(templateSelector);
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

export default Card;