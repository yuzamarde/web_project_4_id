export const page = document.querySelector(".page");
export const portfolioAddButton = document.querySelector('.profile__add-btn');
export const portfolioCloseButton = document.querySelector('.forms__close');
export const portfolioPopupBox = document.querySelector('.forms');
export const portfolioImage = document.querySelector('input[name="form__input-url"]');
export const portfolioTitle = document.querySelector('input[name="form__input-name"]');
export const portfolioForm = document.querySelector('.forms__form');
export const submitButton = document.querySelector('.forms__submit');
export const popupForms = document.querySelector('.forms__overlay');

export default class PortfolioFormHandler {
    constructor(addCardToContainerFn) {
      this.popupBox = document.querySelector('.forms');
      this.imageElement = document.querySelector('input[name="form__input-url"]');
      this.titleElement = document.querySelector('input[name="form__input-name"]');
      this.formElement = document.querySelector('.forms__form');
      this.addCardToContainerFn = addCardToContainerFn;
  
      this.formElement.addEventListener('submit', this.handleSubmit.bind(this));
      this.initEventListeners();
    }
  
    // Initialize event listeners
    initEventListeners() {
      document.querySelector('.profile__add-btn').addEventListener('click', () => {
        this.openPopupBox();
      });
  
      document.querySelector('.forms__close').addEventListener('click', (event) => {
        event.preventDefault();
        this.closePopupBox();
      });
  
      document.querySelector('.forms__overlay').addEventListener('click', () => {
        this.closePopupBox();
      });
  
      // Prevent clicks inside the form from closing the popup
      this.formElement.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    }
  
    // Open the popup
    openPopupBox() {
      this.popupBox.classList.add('forms_active');
    }
  
    // Close the popup
    closePopupBox() {
      this.popupBox.classList.remove('forms_active');
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
  