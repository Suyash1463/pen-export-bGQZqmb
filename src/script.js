document.addEventListener('DOMContentLoaded', () => {
    // Change the title
    const pageTitle = document.querySelector('h1');
    pageTitle.textContent = 'Git Practice Website';

    // Button click event handler
    const changeColorButton = document.querySelector('#change-color-button');
    const body = document.querySelector('body');
    
    changeColorButton.addEventListener('click', () => {
        const randomColor = generateRandomColor();
        body.style.backgroundColor = randomColor;
    });

    // Function to generate a random color
    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
