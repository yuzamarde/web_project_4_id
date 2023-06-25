//pupup profile validation
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("forms__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("forms__input-error_active");
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("forms__input_type_error");
    errorElement.classList.remove("forms__input-error_active");
    errorElement.textContent = "";
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  const toggleButtonState = (formElement, buttonElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".forms__input"));
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add("forms__submit_inactive");
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove("forms__submit_inactive");
      buttonElement.disabled = false;
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".forms__input"));
    const buttonElement = formElement.querySelector(".forms__submit");
  
    toggleButtonState(formElement, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(formElement, buttonElement);
      });
    });
  };
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".forms__form"));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
  
        const inputList = Array.from(formElement.querySelectorAll(".forms__input"));
        inputList.forEach((inputElement) => {
          checkInputValidity(formElement, inputElement);
        });
  
        const buttonElement = formElement.querySelector(".forms__submit");
        toggleButtonState(formElement, buttonElement);
      });
  
      setEventListeners(formElement);
    });
  };
  
  enableValidation();
  
//popup image validation