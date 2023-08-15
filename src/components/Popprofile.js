export const PopprofilePage = document.querySelector(".page");
export const PopprofileAddButton = document.querySelector('.profile__image');
export const PopprofileCloseButton = document.querySelector('.popprofile__close');
export const PopprofilePopupBox = document.querySelector('.popprofile');
export const PopprofileImage = document.querySelector('input[name="popprofile__input-url"]');
export const PopprofileForm = document.querySelector('.popprofile__form');
export const PopprofileSubmit = document.querySelector('.popprofile__submit');
export const PopprofileForms = document.querySelector('.popprofile__overlay');

export default class PopprofileFormHandler {
    constructor(addCardToContainerFn) {
      this.popupBox = document.querySelector('.forms');
      this.imageElement = document.querySelector('input[name="form__input-url"]');
      this.formElement = document.querySelector('.popprofile__form');
      this.addCardToContainerFn = addCardToContainerFn;
  
      this.formElement.addEventListener('submit', this.handleSubmit.bind(this));
      this.initEventListeners();
    }
  
    // Initialize event listeners
    initEventListeners() {
      document.querySelector('.popprofile__form').addEventListener('click', () => {
        this.openPopupBox();
      });
  
      document.querySelector('.popprofile__close').addEventListener('click', (event) => {
        event.preventDefault();
        this.closePopupBox();
      });
  
      document.querySelector('.popprofile__overlay').addEventListener('click', () => {
        this.closePopupBox();
      });
  
      // Prevent clicks inside the form from closing the popup
      this.formElement.addEventListener('click', (event) => {
        event.stopPropagation();
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          this.closePopupBox();
        }
      });
    }
  
    // Open the popup
    openPopupBox() {
      this.popupBox.classList.add('popprofile_active');
    }
  
    // Close the popup
    closePopupBox() {
      this.popupBox.classList.remove('popprofile_active');
    }

  
    // Handle form submission
    handleSubmit(event) {
      event.preventDefault();
      const urlValue = this.imageElement.value.trim();
      const nameValue = this.titleElement.value.trim();
      this.closePopupBox();
      this.addCardToContainerFn({ name: nameValue, link: urlValue });
      this.imageElement.value = '';
      this.titleElement.value = '';
    }
  }
  