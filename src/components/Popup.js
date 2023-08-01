// Popup.js
export default class Popup {
  constructor() {
    this.editPopupBox = document.querySelector('.popup');
    this.popupOverlay = document.querySelector('.popup__overlay');
    this.closePopupButton = document.querySelector('.popup__close');
    this.errorElements = this.editPopupBox.querySelectorAll('.popup__input-error');
    this.errorInputElements = this.editPopupBox.querySelectorAll('.popup__input');
    this.errorBottomInactive = this.editPopupBox.querySelectorAll('.popup__submit');

    this.closePopupButton.addEventListener('click', () => this.closePopup());
    this.popupOverlay.addEventListener('click', () => this.closePopup());
  }

  openPopup() {
    this.editPopupBox.classList.add('popup_active');
    this.addEscCloseListener();
  }

  closePopup() {
    this.editPopupBox.classList.remove('popup_active');
    this.removeEscCloseListener();
    this.clearErrors();
  }

  addEscCloseListener() {
    this.handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        this.closePopup();
      }
    };
    document.addEventListener('keydown', this.handleKeyDown);
  }

  removeEscCloseListener() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  clearErrors() {
    this.errorElements.forEach((errorElement) => {
      errorElement.classList.remove('popup__input-error_active');
    });

    this.errorInputElements.forEach((errorInputElement) => {
      errorInputElement.classList.remove('popup__input_type_error');
    });

    this.errorBottomInactive.forEach((errorBottomInactive) => {
      errorBottomInactive.classList.remove('popup__submit_inactive');
    });
  }
}
