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


// portfolio item add
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


// popprofile change
const pagePopprofile = document.querySelector(".page");
const popprofileAddButton = document.querySelector('.profile__image');
const popprofileCloseButton = document.querySelector('.popprofile__close');
const popprofilePopupBox = document.querySelector('.popprofile');
const popprofileImage = document.querySelector('input[name="popprofile__input-url"]');
const popprofileForm = document.querySelector('.popprofile__form');
const popprofileSubmit = document.querySelector('.popprofile__submit');
const popprofileForms = document.querySelector('.popprofile__overlay');
  
  
popprofileForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const urlValue = popprofileImage.value.trim();
  popprofilePopupBox.classList.remove('popprofile_active');
  addCardToContainer({ name: nameValue, link: urlValue });
  popprofileImage.value = '';
});


  // popprofile change
  // const deletePopupImage = document.querySelector(".page");
  // const deleteAddButton = document.querySelector('.element__delete');
  // const deleteCloseButton = document.querySelector('.delete__close');
  // const deletePopupBox = document.querySelector('.delete');
  // const deleteForm = document.querySelector('.delete__form');
  // const deleteSubmit = document.querySelector('.delete__submit');
  // const deleteForms = document.querySelector('.delete__overlay');
