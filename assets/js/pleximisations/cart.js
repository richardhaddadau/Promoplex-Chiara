/* eslint-disable linebreak-style */
window.addEventListener('load', () => {
    const cartItems = Object.keys(sessionStorage);

    for (const item in cartItems) {
        console.log(sessionStorage.getItem(cartItems[item]));
    }
});
