const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const list = document.querySelector('#items');
let currentRightPosition = 0;
const computedStyles = getComputedStyle(list);

leftArrow.addEventListener('click', function(e) {
    e.preventDefault();
    let currentRightPosition = parseInt(computedStyles.right);

    if (currentRightPosition > 0) {
        list.style.right =  `${currentRightPosition - 100}px`;
    }
});

rightArrow.addEventListener('click', function(e) {
    e.preventDefault();
    let currentRightPosition = parseInt(computedStyles.right);

    if (currentRightPosition < 500) {
        list.style.right =  `${currentRightPosition + 100}px`;
    }
});