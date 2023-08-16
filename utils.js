//pop up profile
closePopupButton.addEventListener('click', () => {
  editPopupBox.classList.remove('popup_active');
  const errorElements = editPopupBox.querySelectorAll('.popup__input-error');
  const errorInputElements = editPopupBox.querySelectorAll('.popup__input');
  const errorBottomInactive = editPopupBox.querySelectorAll('.popup__submit');
  errorElements.forEach((errorElement) => {
    errorElement.classList.remove('popup__input-error_active');
  });
  errorInputElements.forEach((errorInputElement) => {
    errorInputElement.classList.remove('popup__input_type_error');
  });
  errorBottomInactive.forEach((errorBottomInactive) => {
    errorBottomInactive.classList.remove('popup__submit_inactive');
  });
});

popupOverlay.addEventListener('click', () => {
  editPopupBox.classList.remove('popup_active');
  const errorElements = editPopupBox.querySelectorAll('.popup__input-error');
  const errorInputElements = editPopupBox.querySelectorAll('.popup__input');
  const errorBottomInactive = editPopupBox.querySelectorAll('.popup__submit');
  errorElements.forEach((errorElement) => {
    errorElement.classList.remove('popup__input-error_active');
  });
  errorInputElements.forEach((errorInputElement) => {
    errorInputElement.classList.remove('popup__input_type_error');
  });
  errorBottomInactive.forEach((errorBottomInactive) => {
    errorBottomInactive.classList.remove('popup__submit_inactive');
  });
});

const openPopup = () => {
  const closePopupEsc = () => {
    editPopupBox.classList.remove('popup_active');
    const errorElements = editPopupBox.querySelectorAll('.popup__input-error');
    const errorInputElements = editPopupBox.querySelectorAll('.popup__input');
    const errorBottomInactive = editPopupBox.querySelectorAll('.popup__submit');
    errorElements.forEach((errorElement) => {
      errorElement.classList.remove('popup__input-error_active');
    });
    errorInputElements.forEach((errorInputElement) => {
      errorInputElement.classList.remove('popup__input_type_error');
    });
    errorBottomInactive.forEach((errorBottomInactive) => {
      errorBottomInactive.classList.remove('popup__submit_inactive');
    });

    document.removeEventListener('keydown', handleKeyDown);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closePopupEsc();
    }
  };
  document.addEventListener('keydown', handleKeyDown);

};

// show or close popup form
portfolioAddButton.addEventListener('click', () => {
  openFormsPopup();
  portfolioPopupBox.classList.add('forms_active');
});

portfolioCloseButton.addEventListener('click', (event) => {
  event.preventDefault();
  portfolioPopupBox.classList.remove('forms_active');
});
popupForms.addEventListener('click', (event) => {
  event.preventDefault();
  portfolioPopupBox.classList.remove('forms_active');
});

//press esc
const openFormsPopup = () => {
  const closePopupForm = () => {
    portfolioPopupBox.classList.remove('forms_active');
    document.removeEventListener('keydown', handleKeyDown);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closePopupForm();
    }
  };
  document.addEventListener('keydown', handleKeyDown);
};





// image popup
const elements = document.querySelectorAll('.element');
const popupImage = document.querySelector('.zoom');
const popupImageFile = document.querySelector('.zoom__file');
const popupImageTitle = document.querySelector('.zoom__title');
const popupImageClose = document.querySelector('.zoom__close');
const zoomOverlay = document.querySelector('.zoom__overlay');

elements.forEach(element => {
  const image = element.querySelector('.element__image');
  const title = element.querySelector('.element__title');

  image.addEventListener('click', () => {
    popupImageFile.src = image.src;
    popupImageTitle.textContent = title.textContent;
    openFormsZoom(popupImage);
    popupImage.classList.add('zoom_active');
  });
});

popupImageClose.addEventListener('click', () => {
  popupImage.classList.remove('zoom_active');
});

zoomOverlay.addEventListener('click', () => {
  popupImage.classList.remove('zoom_active');
});

const openFormsZoom = () => {
  const closePopupZoom = () => {
    popupImage.classList.remove('zoom_active');
    document.removeEventListener('keydown', handleKeyDown);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closePopupZoom();
    }
  };
  document.addEventListener('keydown', handleKeyDown);
};



// delete popup change

const deletePopupImage = document.querySelector(".page");
const deleteAddButton = document.querySelector('.element__delete');
const deleteCloseButton = document.querySelector('.delete__close');
const deletePopupBox = document.querySelector('.delete');
const deleteForm = document.querySelector('.delete__form');
const deleteSubmit = document.querySelector('.delete__submit');
const deleteOverlay = document.querySelector('.delete__overlay');

deleteAddButton.addEventListener('click', () => {
  openDeletePopup();
  deletePopupBox.classList.add('delete_active');
});

deleteCloseButton.addEventListener('click', (event) => {
  event.preventDefault();
  deletePopupBox.classList.remove('delete_active');
});

deleteOverlay.addEventListener('click', function(event) {
  event.preventDefault();
  deletePopupBox.classList.remove('delete_active');
});



//press esc
const openDeletePopup = () => {
  const closedeletePopupForm = () => {
    deletePopupBox.classList.remove('delete_active');
    document.removeEventListener('keydown', handleKeyDown);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closedeletePopupForm();
    }
  };
  document.addEventListener('keydown', handleKeyDown);
};

