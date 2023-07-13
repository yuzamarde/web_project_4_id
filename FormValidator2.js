class FormValidator {
    constructor(formElement) {
      this.formElement = formElement;
      this.inputList = Array.from(formElement.querySelectorAll(".forms__input"));
      this.buttonElement = formElement.querySelector(".forms__submit");
      this.errorElements = Array.from(formElement.querySelectorAll(".forms__input-error"));
    }
  
    showInputError(inputElement, errorMessage) {
      const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add("forms__input_type_error");
      errorElement.textContent = errorMessage;
      errorElement.classList.add("forms__input-error_active");
    }
  
    hideInputError(inputElement) {
      const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove("forms__input_type_error");
      errorElement.classList.remove("forms__input-error_active");
      errorElement.textContent = "";
    }
  
    checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this.showInputError(inputElement, inputElement.validationMessage);
      } else {
        this.hideInputError(inputElement);
      }
    }
  
    hasInvalidInput() {
      return this.inputList.some((inputElement) => !inputElement.validity.valid);
    }
  
    toggleButtonState() {
      if (this.hasInvalidInput()) {
        this.buttonElement.classList.add("forms__submit_inactive");
        this.buttonElement.disabled = true;
      } else {
        this.buttonElement.classList.remove("forms__submit_inactive");
        this.buttonElement.disabled = false;
      }
    }
  
    setInputListeners() {
      this.inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this.checkInputValidity(inputElement);
          this.toggleButtonState();
        });
      });
    }
  
    setSubmitListener() {
      this.formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this.buttonElement.classList.add("forms__submit_inactive");
      });
    }
  
    enableFormValidation() {
      this.setInputListeners();
      this.setSubmitListener();
      this.toggleButtonState();
    }
  }
  
  // Card form validation
  const cardForm = new FormValidator(document.querySelector(".forms__form"));
  cardForm.enableFormValidation();
  


//popup profile validation
class ProfileFormValidator {
    constructor(formElement) {
      this.formElement = formElement;
      this.inputList = Array.from(formElement.querySelectorAll(".popup__input"));
      this.buttonElement = formElement.querySelector(".popup__submit");
      this.errorElements = Array.from(formElement.querySelectorAll(".popup__input-error"));
    }
  
    showProfileInputError(inputElement, errorMessage) {
      const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add("popup__input_type_error");
      errorElement.classList.add("popup__input-error_active");
      errorElement.textContent = errorMessage;
    }
  
    hideProfileInputError(inputElement) {
      const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove("popup__input_type_error");
      errorElement.classList.remove("popup__input-error_active");
      errorElement.textContent = "";
    }
  
    checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this.showProfileInputError(inputElement, inputElement.validationMessage);
      } else {
        this.hideProfileInputError(inputElement);
      }
    }
  
    hasProfileInvalidInput() {
      return this.inputList.some((inputElement) => !inputElement.validity.valid);
    }
  
    toggleProfileButtonState() {
      if (this.hasProfileInvalidInput()) {
        this.buttonElement.classList.add("popup__submit_inactive");
        this.buttonElement.disabled = true;
      } else {
        this.buttonElement.classList.remove("popup__submit_inactive");
        this.buttonElement.disabled = false;
      }
    }
  
    setProfileEventListeners() {
      this.inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this.checkInputValidity(inputElement);
          this.toggleProfileButtonState();
        });
      });
    }
  
    setSubmitProfileListener() {
      this.formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this.buttonElement.classList.add("popup__submit_inactive");
      });
    }
  
    enableProfileValidation() {
      this.setProfileEventListeners();
      this.setSubmitProfileListener();
      this.toggleProfileButtonState();
    }
  }
  
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    const profileFormValidator = new ProfileFormValidator(formElement);
    profileFormValidator.enableProfileValidation();
  });
  
  