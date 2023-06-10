// profile edit
const tombol = document.querySelector('.profile__edit-btn');
const close = document.querySelector('.popup__close');
const submit = document.querySelector('.popup__profile-submit');
const box = document.querySelector('.popup');
const input = document.querySelector('.popup__profile-name');
const subtextInput = document.querySelector('.popup__profile-work');
const text = document.querySelector('.profile__name');
const subtext = document.querySelector('.profile__work');

tombol.addEventListener('click', () => {
  box.classList.add('popup_active');
  input.value = text.textContent;
  subtextInput.value = subtext.textContent;
});

submit.addEventListener('click', (event) => {
  event.preventDefault();
  text.textContent = input.value;
  subtext.textContent = subtextInput.value;
  box.classList.remove('popup_active');
});


close.addEventListener('click', () => {
    box.classList.remove('popup_active');
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