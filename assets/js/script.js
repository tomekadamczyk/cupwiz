const hamburger = document.querySelector('#hamburger');
const toggleMenu = () => {
    const menu = document.querySelector('#menu');
    const hamburgerInner = document.querySelector('#hamburger-inner');
    menu.classList.toggle("active");
    hamburger.classList.toggle('active');
    if(hamburger.classList.contains('active')) {
        hamburgerInner.textContent = 'CLOSE';
    }
    if(!hamburger.classList.contains('active')) {
        hamburgerInner.textContent = '';
    }
}
hamburger.addEventListener('click', toggleMenu);

const wishList = document.querySelector('#wishlist');
const cart = document.querySelector('#cart');
const chooseCupButtons = document.querySelectorAll('.choose-cup');
const favoriteButtons = document.querySelectorAll('.cw-btn__labeled--favorite');

const increaseNumber = (buttons, data, dataValue) => {
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', (e) => {
            e.preventDefault();
            value = parseInt(data.getAttribute(dataValue), 10) + 1;
            data.setAttribute(dataValue, value);
        })
    }
}

const toggleModal = () => {
    const signup = document.querySelector('#signup');
    const closeModal = document.querySelector('#close-modal');
    const modal = document.querySelector('#modal');

    signup.addEventListener('click', () => {
        modal.classList.add('active');
    })
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    })
}

const rollDownTectContainer = () => {
    const textContainer = document.querySelector('#cw-textBlock__container');
    const readMore = document.querySelector('#cw-btn--readmore');
    const textOverlay = document.querySelector('#cw-textBlock__overlay');
    const readMoreText = readMore.textContent;

    readMore.addEventListener('click', (e) => {
        e.preventDefault();
        textContainer.classList.toggle('active');
        textOverlay.classList.toggle('invisible');
        readMore.classList.toggle('cw-btn--absolute');
        toggleText(readMore, readMoreText, 'Go back', !readMore.classList.contains('cw-btn--absolute'));
    })
}

const toggleText = (element, oldText, newText, condition) => {
    if(condition) {
        element.textContent = newText;
    }
    else {
        element.textContent = oldText;
    }
}

const getDropdownMenu = () => {
    const handler = document.querySelector('#dropdownHandler');
    const menu = document.querySelector('#dropdown');
    handler.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.toggle("active");

        menu.addEventListener('mouseleave', function() {
            menu.classList.remove("active");
        })
    })
}

increaseNumber(chooseCupButtons, cart, 'data-cart');
increaseNumber(favoriteButtons, wishList, 'data-wishlist');
toggleModal();
rollDownTectContainer();
getDropdownMenu();