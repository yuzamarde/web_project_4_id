// Section.js

// Import necessary classes and functions
import Card from "../components/Card.js";
import PortfolioFormHandler from "../components/PopupWithForm.js";
import ImagePopup from "../components/PopupWithImage.js";
import Profile from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import ProfileFormValidator from '../components/ProfileValidator.js';

// Card class
export default class Section {
  constructor() {
    // Profile
    this.userProfile = new Profile();

    // ImagePopup
    this.portfolioFormHandler = new PortfolioFormHandler();
    this.imagePopup = new ImagePopup();

    // Container for Cards
    this.container = document.querySelector('.container');

    // Card
    this.addCardToContainerFn = (cardData) => {
      const newCard = new Card(cardData);
      this.container.prepend(newCard.generateCard());
    };
  }

  // Method to initialize the application
  init() {
    // Event listeners
    document.querySelector('.portfolioAddButton').addEventListener("click", () => {
      this.portfolioFormHandler.openPopupBox();
    });

    document.querySelector('.portfolioCloseButton').addEventListener("click", (event) => {
      event.preventDefault();
      this.portfolioFormHandler.closePopupBox();
    });

    document.querySelector('.popupForms').addEventListener("click", () => {
      this.portfolioFormHandler.closePopupBox();
    });

    // Bind the addCardToContainerFn method to the portfolioFormHandler
    this.portfolioFormHandler.addCardToContainerFn = this.addCardToContainerFn;
  }
}
