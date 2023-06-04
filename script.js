// profile edit
const tombol = document.querySelector('.profile__profile-info_edit-btn');
const close = document.querySelector('.edit-form__close');
const save = document.querySelector('.edit-form__profil-submit-button');
const box = document.querySelector('.edit-form');
const input = document.querySelector('.edit-form__profil-field-1');
const subtextInput = document.querySelector('.edit-form__profil-field-2');
const text = document.querySelector('.profile__profile-info_title');
const subtext = document.querySelector('.profile__profile-info_subtitle');

tombol.addEventListener('click', () => {
    box.classList.add('edit-form__form-active');
});

save.addEventListener('click', () => {
    text.innerHTML = input.value;
    subtext.innerHTML = subtextInput.value;
    box.classList.remove('edit-form__form-active');
});

close.addEventListener('click', () => {
    box.classList.remove('edit-form__form-active');
});

function foo(selector) {
    const element = document.querySelector(selector);
    if (element) {
        console.log(element.innerHTML);
    }
}
foo('.text');
foo('.subtext');


// love button"
var btns = document.querySelectorAll(".element__group");


btns.forEach(function(btn) {

  var icon = btn.querySelector(".element__button");


  btn.onclick = function() {
    if (icon.classList.contains("element__button")) {
      icon.classList.replace("element__button", "element__button-love");
    } else {
      icon.classList.replace("element__button-love", "element__button");
    }
  };
});