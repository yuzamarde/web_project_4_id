//popup forms add card validation
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
  

  
//popup profile validation

const showProfileInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.classList.add("popup__input-error_active");
  errorElement.textContent = errorMessage;
};

const hideProfileInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
};

const checkProfileInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showProfileInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideProfileInputError(formElement, inputElement);
  }
};



const hasProfileInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleProfileButtonState = (formElement, buttonElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  if (hasProfileInvalidInput (inputList)) {
    buttonElement.classList.add("popup__submit_inactive");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("popup__submit_inactive");
    buttonElement.disabled = false;
  }
};

const setProfileEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__submit");

  toggleProfileButtonState(formElement, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkProfileInputValidity(formElement, inputElement);
      toggleProfileButtonState(formElement, buttonElement);
    });
  });
};

const enableProfileValidation  = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();

      const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
      inputList.forEach((inputElement) => {
        checkProfileInputValidity(formElement, inputElement);
      });

      const buttonElement = formElement.querySelector(".popup__submit");
      toggleProfileButtonState(formElement, buttonElement);
    });

    setProfileEventListeners(formElement);
  });
};

enableProfileValidation ();





