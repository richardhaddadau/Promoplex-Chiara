/* eslint-disable linebreak-style */
const countCartItems = () => {
    const cartItems = Object.keys(localStorage);
    let cartTotal = 0;

    for (const item in cartItems) {
        if (cartItems[item].slice(0, 6) === 'PXciID') {
            cartTotal++;
        }
    }

    return cartTotal;
};

window.addEventListener('load', () => {
    const cartNavElement = document.querySelector('#pleximisation-nav-cart');
    const cartCount = countCartItems();

    if (cartNavElement) {
        const cartPill = document.querySelector('#pleximisation-nav-cart .pleximisation-countPill');

        if (cartCount === 0) {
            if (cartPill.classList.contains('pleximisation-countPill--positive')) {
                cartPill.classList.remove('pleximisation-countPill--positive');
            }
        } else {
            if (!cartPill.classList.contains('pleximisation-countPill--positive')) {
                cartPill.classList.add('pleximisation-countPill--positive');
            }

            cartPill.innerHTML = cartCount;
        }
    }
});
