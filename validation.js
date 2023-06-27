//pupup profile validation
const showCardInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("forms__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("forms__input-error_active");
  };
  
  const hideCardInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("forms__input_type_error");
    errorElement.classList.remove("forms__input-error_active");
    errorElement.textContent = "";
  };
  
  const checkCardInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showCardInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideCardInputError(formElement, inputElement);
    }
  };
  
  const hasCardInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  const toggleCardButtonState = (formElement, buttonElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".forms__input"));
    if (hasCardInvalidInput(inputList)) {
      buttonElement.classList.add("forms__submit_inactive");
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove("forms__submit_inactive");
      buttonElement.disabled = false;
    }
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      buttonElement.classList.add('forms__submit_inactive');
    });
  
  };
  
  const setCardEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".forms__input"));
    const buttonElement = formElement.querySelector(".forms__submit");
  
    toggleCardButtonState(formElement, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkCardInputValidity(formElement, inputElement);
        toggleCardButtonState(formElement, buttonElement);
      });
    });
    
  };

  
  
  const enableCardValidation = () => {
    const formList = Array.from(document.querySelectorAll(".forms__form"));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
  
        const inputList = Array.from(formElement.querySelectorAll(".forms__input"));
        inputList.forEach((inputElement) => {
          checkCardInputValidity(formElement, inputElement);
        });
  
        const buttonElement = formElement.querySelector(".forms__submit");
        toggleCardButtonState(formElement, buttonElement);
      });
  
      setCardEventListeners(formElement);
    });
  };
  
  enableCardValidation();
  
//popup image validation