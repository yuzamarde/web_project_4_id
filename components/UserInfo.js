// Profile.js
import Popup from './Popup.js';

export default class Profile {
  constructor() {
    this.editProfileButton = document.querySelector('.profile__edit-btn');
    this.authorNewName = document.querySelector('input[name="popup__input-name"]');
    this.authorNewWork = document.querySelector('input[name="popup__input-work"]');
    this.authorName = document.querySelector('.profile__name');
    this.authorWork = document.querySelector('.profile__work');
    this.editAuthorPopupForm = document.querySelector('.popup__form');

    this.popup = new Popup(); // Create an instance of the Popup class

    this.editProfileButton.addEventListener('click', () => this.openPopup());
    this.editAuthorPopupForm.addEventListener('submit', (event) => this.onSubmit(event));
  }

  openPopup() {
    this.popup.openPopup();
    this.authorNewName.value = this.authorName.textContent;
    this.authorNewWork.value = this.authorWork.textContent;
  }

  closePopup() {
    this.popup.closePopup();
  }

  onSubmit(event) {
    event.preventDefault();
    this.authorName.textContent = this.authorNewName.value;
    this.authorWork.textContent = this.authorNewWork.value;
    this.closePopup(); // Call the closePopup method of the Popup instance
    this.clearInputValues();
  }

  clearInputValues() {
    this.authorNewName.value = '';
    this.authorNewWork.value = '';
  }
}
