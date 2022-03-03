/* eslint-disable linebreak-style */
window.addEventListener('load', () => {
    const cartNavElement = document.querySelector('#pleximisation-nav-cart');

    const cartItems = Object.keys(localStorage);
    let cartTotal = 0;

    for (const item in cartItems) {
        if (cartItems[item].slice(0, 6) === 'PXciID') {
            cartTotal++;
        }
    }

    if (cartNavElement) {
        const cartPill = document.querySelector('#pleximisation-nav-cart .pleximisation-countPill');

        if (cartTotal === 0) {
            if (cartPill.classList.contains('pleximisation-countPill--positive')) {
                cartPill.classList.remove('pleximisation-countPill--positive');
            }
        } else {
            if (!cartPill.classList.contains('pleximisation-countPill--positive')) {
                cartPill.classList.add('pleximisation-countPill--positive');
            }

            cartPill.innerHTML = cartTotal;
        }
    }
});
