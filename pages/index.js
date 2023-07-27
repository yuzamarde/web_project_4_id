import Card from "../components/Card.js";
    function addCardToContainer(cardData) {
        const newCard = new Card(cardData);
        const firstElement = container.firstChild;
        container.insertBefore(newCard.generateCard(), firstElement);
    }
    
    // Function to initialize cards from initial data
    function initializeCards() {
        initialCards.forEach(cardData => {
        addCardToContainer(cardData);
        });
    }
    
    // Call the function to initialize cards when the DOM is ready
    document.addEventListener("DOMContentLoaded", initializeCards);

    