/* eslint-disable linebreak-style */
const updateCart = () => {
    const cartItems = Object.keys(localStorage);
    let currentItem;

    let itemListHTML = '';

    let quoteSubTotal = 0;
    let quoteTax = 0;
    let quoteTotal = 0;

    for (const item in cartItems) {
        if (cartItems[item].slice(0, 6) === 'PXciID') {
            currentItem = JSON.parse(localStorage.getItem(cartItems[item]));
            console.log(currentItem);

            let currentOptions = '';
            let currentPleximisations = '';

            // eslint-disable-next-line guard-for-in
            for (const item in currentItem.variations) {
                currentOptions += `
                    <dt class="definitionList-key">${currentItem.variations[item][0].toUpperCase()}:</dt>
                    <dd class="definitionList-value">${currentItem.variations[item][1]}</dd>
                `;
            }

            // eslint-disable-next-line guard-for-in
            for (const item in currentItem.pleximisations) {
                currentPleximisations += `
                    <dt class="definitionList-key">${currentItem.pleximisations[item][0]}:</dt>
                    <dd class="definitionList-value">${currentItem.pleximisations[item][1]}</dd>
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
    updateCart();
};

window.addEventListener('load', () => {
    updateCart();

    for (let i = 0; i < document.querySelectorAll('[data-pleximisation-id]').length; i++) {
        document.querySelectorAll('[data-pleximisation-id]')[i].addEventListener('click', () => {
            const thisId = document.querySelectorAll('[data-pleximisation-id]')[i].dataset.pleximisationId;
            removeFromQuote(thisId);
        });
    }
});
