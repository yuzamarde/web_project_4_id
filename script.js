// popup-edit profile
const editProfileButton = document.querySelector('.profile__edit-btn');
const closePopupButton = document.querySelector('.popup__close');
const editPopupBox = document.querySelector('.popup');
const authorNewName = document.querySelector('input[name="popup__input-name"]');
const authorNewWork = document.querySelector('input[name="popup__input-work"]');
const authorName = document.querySelector('.profile__name');
const authorWork = document.querySelector('.profile__work');
const editAuthorPopupForm = document.querySelector('.popup__form');
const popupOverlay = document.querySelector('.popup__overlay');

editProfileButton.addEventListener('click', () => {
  openPopup();
  editPopupBox.classList.add('popup_active');
  authorNewName.value = authorName.textContent;
  authorNewWork.value = authorWork.textContent;
});

editAuthorPopupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  authorName.textContent = authorNewName.value;
  authorWork.textContent = authorNewWork.value;
  editPopupBox.classList.remove('popup_active');
  authorNewName.value = '';
  authorNewWork.value = '';
});


// // portfolio item add
const page = document.querySelector(".page");
const portfolioAddButton = document.querySelector('.profile__add-btn');
const portfolioCloseButton = document.querySelector('.forms__close');
const portfolioPopupBox = document.querySelector('.forms');
const portfolioImage = document.querySelector('input[name="form__input-url"]');
const portfolioTitle = document.querySelector('input[name="form__input-name"]');
const portfolioForm = document.querySelector('.forms__form');
const submitButton = document.querySelector('.forms__submit');
const popupForms = document.querySelector('.forms__overlay');
  
  
portfolioForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const urlValue = portfolioImage.value.trim();
  const nameValue = portfolioTitle.value.trim();
  portfolioPopupBox.classList.remove('forms_active');
  addCardToContainer({ name: nameValue, link: urlValue });
  portfolioImage.value = '';
  portfolioTitle.value = '';
});

