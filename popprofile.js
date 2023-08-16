// popprofile change
// const pagePopprofile = document.querySelector(".page");
// const popprofileAddButton = document.querySelector('.profile__image');
// const popprofileCloseButton = document.querySelector('.popprofile__close');
// const popprofilePopupBox = document.querySelector('.popprofile');
// const popprofileImage = document.querySelector('input[name="popprofile__input-url"]');
// const popprofileForm = document.querySelector('.popprofile__form');
// const popprofileSubmit = document.querySelector('.popprofile__submit');
// const popprofileForms = document.querySelector('.popprofile__overlay');
  
  
popprofileForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const urlValue = popprofileImage.value.trim();
  popprofilePopupBox.classList.remove('popprofile_active');
  addCardToContainer({ name: nameValue, link: urlValue });
  popprofileImage.value = '';
});




//popup popprofile validation
class PopprofileFormValidator {
    constructor(formElement) {
      this.formElement = formElement;
      this.inputList = Array.from(formElement.querySelectorAll(".popprofile__input"));
      this.buttonElement = formElement.querySelector(".popprofile__submit");
      this.errorElements = Array.from(formElement.querySelectorAll(".popprofile__input-error"));
    }
  
    showPopprofileInputError(inputElement, errorMessage) {
      const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add("popprofile__input_type_error");
      errorElement.classList.add("popprofile__input-error_active");
      errorElement.textContent = errorMessage;
    }
  
    hidePopprofileInputError(inputElement) {
      const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove("popprofile__input_type_error");
      errorElement.classList.remove("popprofile__input-error_active");
      errorElement.textContent = "";
    }
  
    checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this.showPopprofileInputError(inputElement, inputElement.validationMessage);
      } else {
        this.hidePopprofileInputError(inputElement);
      }
    }
  
    hasPopprofileInvalidInput() {
      return this.inputList.some((inputElement) => !inputElement.validity.valid);
    }
  
    togglePopprofileButtonState() {
      if (this.hasPopprofileInvalidInput()) {
        this.buttonElement.classList.add("popprofile__submit_inactive");
        this.buttonElement.disabled = true;
      } else {
        this.buttonElement.classList.remove("popprofile__submit_inactive");
        this.buttonElement.disabled = false;
      }
    }
  
    setPopprofileEventListeners() {
      this.inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this.checkInputValidity(inputElement);
          this.togglePopprofileButtonState();
        });
      });
    }
  
    setSubmitPopprofileListener() {
      this.formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this.buttonElement.classList.add("popprofile__submit_inactive");
      });
    }
  
    enablePopprofileValidation() {
      this.setPopprofileEventListeners();
      this.setSubmitPopprofileListener();
      this.togglePopprofileButtonState();
    }
  }
  
  const popprofileList = Array.from(document.querySelectorAll(".popprofile__form"));
  formList.forEach((formElement) => {
    const popprofileFormValidator = new PopprofileFormValidator(formElement);
    popprofileFormValidator.enablePopprofileValidation();
  });




  // popprofile change
const deletePopupImage = document.querySelector(".page");
const deleteAddButton = document.querySelector('.element__delete');
const deleteCloseButton = document.querySelector('.delete__close');
const deletePopupBox = document.querySelector('.delete');
const deleteForm = document.querySelector('.delete__form');
const deleteSubmit = document.querySelector('.delete__submit');
const deleteForms = document.querySelector('.delete__overlay');
  
popprofileAddButton.addEventListener('click', () => {
  popprofileFormsPopup();
  popprofilePopupBox.classList.add('popprofile_active');
});

popprofileCloseButton.addEventListener('click', (event) => {
  event.preventDefault();
  popprofilePopupBox.classList.remove('popprofile_active');
});

popprofileForms.addEventListener('click', (event) => {
  event.preventDefault();
  popprofilePopupBox.classList.remove('popprofile_active');
});

//press esc
const popprofileFormsPopup = () => {
  const closePopupForm = () => {
    popprofilePopupBox.classList.remove('popprofile_active');
    document.removeEventListener('keydown', handleKeyDown);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closePopupForm();
    }
  };
  document.addEventListener('keydown', handleKeyDown);
};