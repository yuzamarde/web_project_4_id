const tombol = document.querySelector('.profile__profile-info_edit-btn');
const close = document.querySelector('.form__close');
const save = document.querySelector('.form__submit-button');
const box = document.querySelector('.form');
const input = document.querySelector('.form__field-1');
const subtextInput = document.querySelector('.form__field-2');
const text = document.querySelector('.profile__profile-info_title');
const subtext = document.querySelector('.profile__profile-info_subtitle');

tombol.addEventListener('click', () => {
    box.classList.add('form-active');
});

save.addEventListener('click', () => {
    text.innerHTML = input.value;
    subtext.innerHTML = subtextInput.value;
    box.classList.remove('form-active');
});

close.addEventListener('click', () => {
    box.classList.remove('form-active');
});

function foo(selector) {
    const element = document.querySelector(selector);
    if (element) {
        console.log(element.innerHTML);
    }
}
foo('.text');
foo('.subtext');