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

const updateCart = () => {
    const cartItems = Object.keys(localStorage);
    let currentItem;

    let itemListHTML = '';

    let quoteSubTotal = 0;
    let quoteTax = 0;
    let quoteTotal = 0;

    if (countCartItems() > 0) {
        document.querySelector('#pleximisation-cart-wrapper').style.display = 'block';
        document.querySelector('#pleximisation-empty-cart-wrapper').style.display = 'none';
    } else {
        document.querySelector('#pleximisation-cart-wrapper').style.display = 'none';
        document.querySelector('#pleximisation-empty-cart-wrapper').style.display = 'block';
    }

    for (const item in cartItems) {
        if (cartItems[item].slice(0, 6) === 'PXciID') {
            currentItem = JSON.parse(localStorage.getItem(cartItems[item]));

            let currentOptions = '';
            let currentPleximisations = '';

            // eslint-disable-next-line guard-for-in
            for (const x in currentItem.variations) {
                currentOptions += `
                    <dt class="definitionList-key">${currentItem.variations[x][0].toUpperCase()}:</dt>
                    <dd class="definitionList-value">${currentItem.variations[x][1]}</dd>
                `;
            }

            // eslint-disable-next-line guard-for-in
            for (const y in currentItem.pleximisations) {
                currentPleximisations += `
                    <dt class="definitionList-key">${currentItem.pleximisations[y][0]}:</dt>
                    <dd class="definitionList-value">${currentItem.pleximisations[y][1]}</dd>
                `;
            }

            itemListHTML += `
                <tr class="cart-item" data-item-row>
                    
                    <!-- Item Image -->
                    <td class="cart-item-block cart-item-figure">
                        <img class="cart-item-image lazyload" data-sizes="auto" src="${currentItem['product-image-url']}" alt="${currentItem['product-title']}" title="${currentItem['product-title']}">
                    </td>

                    <!-- Item Details -->
                    <td class="cart-item-block cart-item-title">
                        <p class="cart-item-brand">${currentItem['product-brand']}</p>
                        
                        <h4 class="cart-item-name"><a href="${currentItem['product-url']}">${currentItem['product-title']}</a></h4>

                        <dl class="definitionList">
                            <dt class="definitionList-key">SKU: </dt>
                            <dd class="definitionList-value">${currentItem['product-sku']}</dd>
                            ${currentOptions}
                            ${currentPleximisations}
                        </dl>
                    </td>

                    <td class="cart-item-block cart-item-info">
                        <span class="cart-item-label">Price</span>
                        <span class="cart-item-value">$${currentItem['price-per-unit']}</span>
                    </td>

                    <td class="cart-item-block cart-item-info">
                        <span class="cart-item-label">Setup Fees</span>
                        <span class="cart-item-value">$${currentItem['setup-fees']}</span>
                    </td>

                    <td class="cart-item-block cart-item-info cart-item-quantity">
                        <span class="cart-item-label">Quantity</span>
                        <span class="cart-item-value">${currentItem.quantity}</span>
                    </td>

                    <td class="cart-item-block cart-item-info cart-item-quantity">
                        <span class="cart-item-label">Total</span>
                        <span class="cart-item-value">$${currentItem.total}</span>
                        <a class="" href="#" data-pleximisation-id=${cartItems[item]}>
                            <i class="fa-solid fa-trash-can" id="quote-delete-icon"></i>
                        </a>
                    </td>
                </tr>
            `;

            const floatTotal = parseFloat(currentItem.total);

            quoteSubTotal += floatTotal;
            quoteTax += floatTotal * 0.1;
            quoteTotal += floatTotal * 1.1;
        }
    }

    document.querySelector('#pleximimsation-quote-list').innerHTML = itemListHTML;
    document.querySelector('#pleximisation-totals-subtotal span').innerHTML = `$${quoteSubTotal.toFixed(2)}`;
    document.querySelector('#pleximisation-totals-tax span').innerHTML = `$${quoteTax.toFixed(2)}`;
    document.querySelector('#pleximisation-totals-total span').innerHTML = `$${quoteTotal.toFixed(2)}`;
};

const removeFromQuote = (storageID) => {
    localStorage.removeItem(storageID);
    document.querySelector('[data-cart-page-title]').innerHTML = `Your Cart (${countCartItems()} items)`;
    updateCart();
};

const formValidated = () => {
    const formFirstName = document.querySelector('#form-first-name').value;
    const formLastName = document.querySelector('#form-last-name').value;

    // const formCompanyName = document.querySelector('#form-company-name').value;

    const formEmail = document.querySelector('#form-email').value;

    // const formPhone = document.querySelector('#form-phone').value;
    // const formMobile = document.querySelector('#form-mobile').value;

    const formStreetAddress = document.querySelector('#form-street-address').value;
    const formSuburb = document.querySelector('#form-suburb').value;
    const formPostcode = document.querySelector('#form-postcode').value;
    const formState = document.querySelector('#form-state').value;

    // const formComments = document.querySelector('#form-comments').value;

    const validationMessage = [];

    if (formFirstName.length === 0) {
        validationMessage.push('No First Name was provided.');
    }

    if (formLastName.length === 0) {
        validationMessage.push('No Last Name was provided.');
    }

    if (formEmail.length === 0) {
        validationMessage.push('No Email Address was provided.');
    } else if (!((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formEmail)))) {
        validationMessage.push('Invalid Email Address provided.');
    }

    if (formStreetAddress.length === 0) {
        validationMessage.push('No Street Address was provided.');
    }

    if (formSuburb.length === 0) {
        validationMessage.push('No Suburb was provided.');
    }

    if (formPostcode.length === 0) {
        validationMessage.push('No Postcode was provided.');
    }

    if (formState.length === 0) {
        validationMessage.push('No State was provided.');
    }

    if (validationMessage.length === 0) {
        return null;
    }

    return validationMessage;
};

const showError = (errorId, errorType, errorMessage) => {
    const currentError = document.querySelector(`#${errorId}`);
    currentError.classList.remove('danger');
    currentError.classList.remove('warning');

    currentError.classList.add(errorType);
    currentError.innerHTML = errorMessage;
    currentError.classList.remove('hide');

    // setTimeout(() => {
    //     currentError.classList.add('hide');
    // }, 3000);
};

// eslint-disable-next-line no-unused-vars
const submitQuote = () => {
    const cartItems = Object.keys(localStorage);
    let currentItem;

    let emailContent = '<table style="width: 100%;"><tbody>';

    let quoteTotal = 0;

    if (countCartItems() === 0) {
        showError('pleximisation-cart-message', 'danger', 'You cannot request a quote for an empty cart.');
        return false;
    }

    const errorMessage = formValidated();

    if (errorMessage != null) {
        showError('pleximisation-cart-message', 'danger', errorMessage.join('<br>'));
        return false;
    }

    for (let i = 0; i < document.querySelectorAll('.pleximisation-error-message').length; i++) {
        if (!document.querySelectorAll('.pleximisation-error-message')[i].classList.contains('hide')) {
            document.querySelectorAll('.pleximisation-error-message')[i].classList.add('hide');
        }
    }

    let cartCount = 1;

    for (const item in cartItems) {
        if (cartItems[item].slice(0, 6) === 'PXciID') {
            currentItem = JSON.parse(localStorage.getItem(cartItems[item]));

            let currentOptions = '';
            let currentPleximisations = '';

            // eslint-disable-next-line guard-for-in
            for (const x in currentItem.variations) {
                currentOptions += `
                    ${currentItem.variations[x][0].toUpperCase()}: ${currentItem.variations[x][1]}<br/>
                `;
            }

            // eslint-disable-next-line guard-for-in
            for (const y in currentItem.pleximisations) {
                currentPleximisations += `
                    ${currentItem.pleximisations[y][0]}: ${currentItem.pleximisations[y][1]}<br/>
                `;
            }

            emailContent += `
                <tr style="width: 100%; min-height: 20px; display: flex; flex-direction: row; flex-wrap: nowrap; align-items: center; border-bottom: 1px solid #ea4f24;">
                    <td style="padding: 10px; width: 15%; text-align: center;">
                        <img src="${currentItem['product-image-url']}" style="max-height: 130px; max-width: 100%;" alt="">
                    </td>

                    <td style="padding: 10px; flex-grow: 2; height: 100%;">
                        <h4 style="font-size: 100%;">${cartCount++}. ${currentItem['product-title']}</h4>
                        <p style="font-size: 80%;">
                            SKU: ${currentItem['product-sku']}<br/>
                            ${currentOptions}<br/>
                            ${currentPleximisations}
                        </p>

                        <p style="font-size: 80%;">
                            Price Per Unit: $${parseFloat(currentItem['price-per-unit']).toFixed(2)}
                            Setup Fees: $${parseFloat(currentItem['setup-fees']).toFixed(2)}
                            Quantity: ${currentItem.quantity}
                        </p>
                    </td>

                    <td style="padding: 10px; width: 20%; text-align: center;">
                        <h3 style="font-size: 120%;">$${parseFloat(currentItem.total).toFixed(2)}</h3>
                    </td>
                </tr>
            `;

            const floatTotal = parseFloat(currentItem.total);
            quoteTotal += floatTotal * 1.1;
        }
    }

    emailContent += '</tbody></table>';

    const customerFirstName = document.querySelector('#form-first-name').value;
    const customerLastName = document.querySelector('#form-last-name').value;
    const customerCompanyName = document.querySelector('#form-company-name').value;
    const customerEmail = document.querySelector('#form-email').value;
    const customerPhone = document.querySelector('#form-phone').value;
    const customerMobile = document.querySelector('#form-mobile').value;
    const customerStreetAddress = document.querySelector('#form-street-address').value;
    const customerSuburb = document.querySelector('#form-suburb').value;
    const customerPostcode = document.querySelector('#form-postcode').value;
    const customerState = document.querySelector('#form-state').value;
    const customerComments = document.querySelector('#form-comments').value;

    const templateParams = {
        'quote-first-name': customerFirstName,
        'quote-last-name': customerLastName,
        'quote-company-name': customerCompanyName,
        'quote-email': customerEmail,
        'quote-phone': customerPhone,
        'quote-mobile': customerMobile,
        'quote-street-address': customerStreetAddress,
        'quote-suburb': customerSuburb,
        'quote-postcode': customerPostcode,
        'quote-state': customerState,
        'quote-comments': customerComments,

        'quote-content': emailContent,
        'quote-total': quoteTotal.toFixed(2),
    };

    // eslint-disable-next-line no-undef
    emailjs.send('service_kj4z9fj', 'template_2iqqo7e', templateParams)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            showError('pleximisation-cart-message', 'success', 'Thank you for your quote request. We will be in touch soon.');

            for (const item in cartItems) {
                if (cartItems[item].slice(0, 6) === 'PXciID') {
                    removeFromQuote(cartItems[item]);
                }
            }
        }, (error) => {
            console.log('FAILED...', error);
            // eslint-disable-next-line quotes
            showError('pleximisation-cart-message', 'danger', `Oops! Something went wrong. Please try again.<br/>If this keeps happening, please contact us and let us know.`);
        });

    updateCart();
};

window.addEventListener('load', () => {
    for (let i = 0; i < document.querySelectorAll('.pleximisation-error-message').length; i++) {
        if (!document.querySelectorAll('.pleximisation-error-message')[i].classList.contains('hide')) {
            document.querySelectorAll('.pleximisation-error-message')[i].classList.add('hide');
        }
    }

    updateCart();
    document.querySelector('[data-cart-page-title]').innerHTML = `Your Cart (${countCartItems()} items)`;

    for (let i = 0; i < document.querySelectorAll('[data-pleximisation-id]').length; i++) {
        document.querySelectorAll('[data-pleximisation-id]')[i].addEventListener('click', () => {
            const thisId = document.querySelectorAll('[data-pleximisation-id]')[i].dataset.pleximisationId;
            removeFromQuote(thisId);
        });
    }
});
