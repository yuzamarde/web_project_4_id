export default class ImagePopup {
    constructor() {
      this.elements = document.querySelectorAll('.element');
      this.popupImage = document.querySelector('.zoom');
      this.popupImageFile = document.querySelector('.zoom__file');
      this.popupImageTitle = document.querySelector('.zoom__title');
      this.popupImageClose = document.querySelector('.zoom__close');
      this.zoomOverlay = document.querySelector('.zoom__overlay');
      this.openFormsZoom = this._openFormsZoom.bind(this);
      this.closePopupZoom = this._closePopupZoom.bind(this);
      this.handleKeyDown = this._handleKeyDown.bind(this);
  
      this.elements.forEach(element => {
        const image = element.querySelector('.element__image');
        const title = element.querySelector('.element__title');
  
        image.addEventListener('click', () => this._handleImageClick(image, title));
      });
  
      this.popupImageClose.addEventListener('click', () => this.closePopupZoom());
  
      this.zoomOverlay.addEventListener('click', () => this.closePopupZoom());
    }
  
    _handleImageClick(image, title) {
      this.popupImageFile.src = image.src;
      this.popupImageTitle.textContent = title.textContent;
      this.openFormsZoom();
      this.popupImage.classList.add('zoom_active');
    }
  
    _closePopupZoom() {
      this.popupImage.classList.remove('zoom_active');
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  
    _handleKeyDown(event) {
      if (event.key === 'Escape') {
        this.closePopupZoom();
      }
    }
  
    _openFormsZoom() {
      document.addEventListener('keydown', this.handleKeyDown);
    }

     addNewCard(card) {
    this.elements.push(card);
    this._setUpEventListenersForCard(card);
    }
    addNewCard(card) {
      const image = card.querySelector('.element__image');
      const title = card.querySelector('.element__title');
  
      image.addEventListener('click', () => this._handleImageClick(image, title));
      this.elements.push(card);
    }
  }

  