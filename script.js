// profile edit
const tombol = document.querySelector('.profile__edit-btn');
const close = document.querySelector('.popup__close');
const box = document.querySelector('.popup');
const input = document.querySelector('input[name="popup__input-name"]');
const subtextInput = document.querySelector('input[name="popup__input-work"]');
const text = document.querySelector('.profile__name');
const subtext = document.querySelector('.profile__work');
const form = document.querySelector('.popup__form');


// popup edit name
tombol.addEventListener('click', () => {
  box.classList.add('popup_active');
  input.value = text.textContent;
  subtextInput.value = subtext.textContent;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  text.textContent = input.value;
  subtext.textContent = subtextInput.value;
  box.classList.remove('popup_active');
});

close.addEventListener('click', () => {
  box.classList.remove('popup_active');
});



// portfolio item add
const page = document.querySelector(".page");
const portfolioAddButton = page.querySelector('.profile__add-btn');
const portfolioCloseButton = page.querySelector('.popup-add__close');
const portfolioPopupBox = page.querySelector('.popupadd');
const portfolioNameInput = page.querySelector('input[name="popup-add__input-name"]');
const portfolioWorkInput = page.querySelector('input[name="popup-add__input-work"]');
const portfolioNameText = page.querySelector('.popup-add__name');
const portfolioWorkText = page.querySelector('.popup-add__work');
const portfolioForm = page.querySelector('.popupadd__form');

portfolioAddButton.addEventListener('click', () => {
  portfolioPopupBox.classList.add('popupadd_active');
  portfolioNameInput.value = '';
  portfolioWorkInput.value = '';
});

// portfolioForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   portfolioNameText.textContent = portfolioNameInput.value;
//   portfolioWorkText.textContent = portfolioWorkInput.value;
//   portfolioPopupBox.classList.remove('popupadd_active');
// });

portfolioCloseButton.addEventListener('click', () => {
  portfolioPopupBox.classList.remove('popupadd_active');
});








// class elements
// element__button"
var btns = document.querySelectorAll(".element__group");


btns.forEach(function(btn) {

  var icon = btn.querySelector(".element__button");


  btn.onclick = function() {
    if (icon.classList.contains("element__button")) {
      icon.classList.replace("element__button", "element__button-active");
    } else {
      icon.classList.replace("element__button-active", "element__button");
    }
  };
});