/* eslint-disable linebreak-style */
const plexObj = {
    limit: 4,
    current: 0,

    minimumOrderQty: 5,
    moqMessage: 'The Minimum Order Quantity is 5 items',

    orderQty: 5,
    orderPPU: 0,
    orderSetup: 0,
    orderTotal: 0,

    pleximisationFees: {},

    productOptions: [],
};

// id: Options Name, Extra Per Unit, Extra Setup Fee
const pleximisationOptions = {
    1: ['Small Embroidery', 0, 0],
    2: ['Medium Embroidery', 0, 0],
    3: ['Large Embroidery', 0, 0],
    4: ['XL Embroidery', 0, 0],
    5: ['Screen Print 1 Colour', 0, 55],
    6: ['Screen Print 2 Colours', 0, 110],
    7: ['Screen Print 3 Colours', 0, 165],
    8: ['Screen Print 4 Colours', 0, 220],
    9: ['Small Full Colour Digital Print', 0, 75],
    10: ['Medium Full Colour Digital Print', 0, 75],
    11: ['Large Full Colour Digital Print', 0, 75],
    12: ['XL Full Colour Digital Print', 0, 75],
    13: ['2XL Full Colour Digital Print', 0, 75],
};

const generateRandomID = () =>
// Generate random three-figure number
     `${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;

// eslint-disable-next-line no-unused-vars
const addtoQuote = () => {
    const quoteObject = plexObj;

    const productObject = {
        id: document.querySelector('#pleximisation-product-id').value,
        imageURL: document.querySelector('#pleximisation-product-image').value,
        brand: document.querySelector('#pleximisation-product-brand').value,
        brandURL: document.querySelector('#pleximisation-product-brand-url').value,
        title: document.querySelector('#pleximisation-product-title').value,
        sku: document.querySelector('[data-product-sku]').value,
    };

    const toAddObject = {
        'product-id': productObject.id,
        'product-image-url': productObject.imageURL,
        'product-brand': productObject.brand,
        'product-brand-url': productObject.brandURL,
        'product-title': productObject.title,
        'product-sku': productObject.sku,

        'price-per-unit': quoteObject.orderPPU,
        'setup-fees': quoteObject.orderSetup,
        quantity: quoteObject.orderQty,
        total: quoteObject.orderTotal,

        pleximisations: [],
    };

    let currentOption;
    let currentOptionTitle;
    const variationsData = document.querySelectorAll('[data-product-variation]');

    for (let x = 0; x < variationsData.length; x++) {
        currentOptionTitle = variationsData[x].getAttribute('id').slice('pleximisation-product-'.length);
        currentOption = variationsData[x].value;

        toAddObject[`product-variation-${currentOptionTitle}`] = currentOption;
    }

    let x = 1;

    for (const item in quoteObject.pleximisationFees) {
        if (quoteObject.pleximisationFees[item]) {
            toAddObject.pleximisations.push(`${x}: ${quoteObject.pleximisationFees[item][2]}`);
            x++;
        }
    }

    const cartItemID = `PXciID${generateRandomID()}`;

    sessionStorage.setItem(cartItemID, JSON.stringify(toAddObject));
    window.location.href = '/cart.php';
};

// eslint-disable-next-line no-unused-vars
const removeFromQuote = () => {

};

const addPleximisation = () => {
    if (plexObj.current < plexObj.limit) {
        plexObj.current++;

        const optionsWrapper = document.querySelector('#pleximisation-options');

        const innerDiv = document.createElement('div');
        innerDiv.classList.add('pleximisation-selections');

        const randomId = `PX${generateRandomID()}`;
        innerDiv.dataset.secretId = randomId;

        plexObj.pleximisationFees[randomId] = [0, 0];

        const selectionBox = document.createElement('select');
        selectionBox.classList.add('pleximisation-box');
        selectionBox.setAttribute('onchange', 'changePleximisation(this)');

        const topOption = document.createElement('option');
        topOption.setAttribute('selected', true);
        topOption.setAttribute('disabled', true);
        topOption.append(document.createTextNode('Select Customisation'));
        topOption.value = 0;

        selectionBox.append(topOption);

        for (const item in Object.keys(pleximisationOptions)) {
            if (Object.keys(pleximisationOptions)[item]) {
                const thisOption = document.createElement('option');
                thisOption.append(document.createTextNode(pleximisationOptions[Object.keys(pleximisationOptions)[item]][0]));
                thisOption.value = Object.keys(pleximisationOptions)[item];
                thisOption.dataset.index = Object.keys(pleximisationOptions)[item];

                selectionBox.append(thisOption);
            }
        }

        const deleteOption = document.createElement('div');
        deleteOption.classList.add('pleximisation-delete');
        deleteOption.setAttribute('onclick', 'removePleximisation(this)');
        deleteOption.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

        innerDiv.append(selectionBox);
        innerDiv.append(deleteOption);
        optionsWrapper.append(innerDiv);
    } else {
        return false;
    }

    if (plexObj.current === plexObj.limit) {
        document.querySelector('.pleximisation-add').style.display = 'none';
    }

    return true;
};

const getCorrectPrice = (value, price) => {
    const pricingObj = {
        1: price,
        10: price,
        25: price * 0.90,
        50: price * 0.80,
        100: price * 0.75,
        250: price * 0.60,
    };

    let moreThan = 0;

    for (const item in Object.keys(pricingObj)) {
        if (value >= parseInt(Object.keys(pricingObj)[item], 10)) {
            moreThan = Object.keys(pricingObj)[item];
        }
    }

    let extraPPU = 0;

    for (const item in plexObj.pleximisationFees) {
        if (plexObj.pleximisationFees[item]) {
            extraPPU += plexObj.pleximisationFees[item][0];
        }
    }

    return parseFloat(pricingObj[moreThan] + extraPPU).toFixed(2);
};

const getCorrectFees = () => {
    let extraSetupFees = 0;

    for (const item in plexObj.pleximisationFees) {
        if (plexObj.pleximisationFees[item]) {
            extraSetupFees += plexObj.pleximisationFees[item][1];
        }
    }

    return extraSetupFees;
};

const showError = (errorId, errorType, errorMessage) => {
    const currentError = document.querySelector(`#${errorId}`);
    currentError.classList.remove('danger');
    currentError.classList.remove('warning');

    currentError.classList.add(errorType);
    currentError.innerHTML = errorMessage;
    currentError.classList.remove('hide');

    setTimeout(() => {
        currentError.classList.add('hide');
    }, 3000);
};

const updateChargesBlock = () => {
    const elQty = document.querySelector('.pleximisation-quantity .pleximisation-pricing-unit');
    const elIndividualPrice = document.querySelector('.pleximisation-individual-price .pleximisation-pricing-unit');
    const elSetupFees = document.querySelector('.pleximisation-setup-fee .pleximisation-pricing-unit');

    const elTotal = document.querySelector('.pleximisation-total-price .pleximisation-pricing-unit');

    elQty.innerHTML = '<i class="fa-solid fa-spinner"></i>';
    elIndividualPrice.innerHTML = '<i class="fa-solid fa-spinner"></i>';
    elSetupFees.innerHTML = '<i class="fa-solid fa-spinner"></i>';
    elTotal.innerHTML = '<i class="fa-solid fa-spinner"></i>';

    setTimeout(() => {
        const qty = document.querySelector('.form-input.form-input--incrementTotal');
        let currentQty = qty.value;

        if (currentQty < plexObj.minimumOrderQty) {
            showError('pleximisation-qty-box-error', 'warning', plexObj.moqMessage);
            currentQty = plexObj.minimumOrderQty;
        }
        qty.value = currentQty;

        const setPrice = parseFloat(document.querySelector('[data-product-price-without-tax]').innerHTML.replace('$', '')).toFixed(2);

        const unitPrice = getCorrectPrice(qty.value, setPrice);
        const setupCost = getCorrectFees();

        plexObj.orderQty = parseInt(qty.value, 10);
        plexObj.orderPPU = parseFloat(unitPrice).toFixed(2);
        plexObj.orderSetup = parseFloat(setupCost).toFixed(2);
        plexObj.orderTotal = parseFloat((qty.value * unitPrice) + setupCost).toFixed(2);

        elQty.innerHTML = plexObj.orderQty;
        elIndividualPrice.innerHTML = `$${ plexObj.orderPPU}`;
        elSetupFees.innerHTML = setupCost === 0 ? '-' : `$${ plexObj.orderSetup}`;

        elTotal.innerHTML = `$${ parseFloat((qty.value * unitPrice) + setupCost).toFixed(2)}`;
    }, 500);
};

// eslint-disable-next-line no-unused-vars
const removePleximisation = (e) => {
    e.parentElement.parentElement.removeChild(e.parentElement);
    plexObj.current--;

    const idKey = e.parentElement.dataset.secretId;
    delete plexObj.pleximisationFees[idKey];

    if (plexObj.current < plexObj.limit) {
        document.querySelector('.pleximisation-add').style.display = 'flex';
    }

    updateChargesBlock();
};

const updateMOQ = () => {
    let highestMOQ = 0;
    let highestMOQMessage = '';
    let currentMOQ = 0;
    let currentMOQMessage = '';
    let currentPleximisation;

    // eslint-disable-next-line prefer-const
    for (let item in plexObj.pleximisationFees) {
        if (plexObj.pleximisationFees[item][2] !== '') {
            currentMOQ = 0;
            currentPleximisation = plexObj.pleximisationFees[item][2];

            switch (currentPleximisation) {
            case 'Small Embroidery':
            case 'Medium Embroidery':
            case 'Large Embroidery':
            case 'XL Embroidery':
                currentMOQ = 10;
                currentMOQMessage = `The Minimum Order Quantity for Embroidery is ${currentMOQ} items`;
                break;

            case 'Screen Print 1 Colour':
            case 'Screen Print 2 Colours':
            case 'Screen Print 3 Colours':
            case 'Screen Print 4 Colours':
                currentMOQ = 25;
                currentMOQMessage = `The Minimum Order Quantity for Screen Print is ${currentMOQ} items`;
                break;

            case 'Small Full Colour Digital Print':
            case 'Medium Full Colour Digital Print':
            case 'Large Full Colour Digital Print':
            case 'XL Full Colour Digital Print':
            case '2XL Full Colour Digital Print':
                currentMOQ = 5;
                currentMOQMessage = `The Minimum Order Quantity for Digital Transfers is ${currentMOQ} items`;
                break;

            default:
                currentMOQ = 5;
                currentMOQMessage = `The Minimum Order Quantity is ${currentMOQ} items`;
                break;
            }

            if (currentMOQ > highestMOQ) {
                highestMOQ = currentMOQ;
                highestMOQMessage = currentMOQMessage;
            }
        }
    }

    plexObj.minimumOrderQty = highestMOQ;
    plexObj.moqMessage = highestMOQMessage;
};

// eslint-disable-next-line no-unused-vars
const changePleximisation = (e) => {
    const idKey = e.parentElement.dataset.secretId;

    plexObj.pleximisationFees[idKey][0] = pleximisationOptions[e.options[e.selectedIndex].dataset.index][1];
    plexObj.pleximisationFees[idKey][1] = pleximisationOptions[e.options[e.selectedIndex].dataset.index][2];
    plexObj.pleximisationFees[idKey][2] = pleximisationOptions[e.options[e.selectedIndex].dataset.index][0];

    updateMOQ();
    updateChargesBlock();
};

const loadPleximisations = () => {
    addPleximisation();
};

window.addEventListener('load', () => {
    for (let i = 0; i < document.querySelectorAll('.pleximisation-error-message').length; i++) {
        if (!document.querySelectorAll('.pleximisation-error-message')[i].classList.contains('hide')) {
            document.querySelectorAll('.pleximisation-error-message')[i].classList.add('hide');
        }
    }

    const qty = document.querySelector('.form-input.form-input--incrementTotal');
    qty.value = plexObj.minimumOrderQty;

    loadPleximisations();
    updateChargesBlock();

    document.querySelector('.form-input.form-input--incrementTotal').addEventListener('change', () => {
        updateChargesBlock();
    });

    document.querySelector('[data-product-option-change]').addEventListener('change', (e) => {
        const optionValue = e.target.labels[0].children[0].title ? e.target.labels[0].children[0].title : e.target.labels[0].children[0].innerHTML;

        let currentOption;
        let currentOptionTitle;

        for (let x = 0; x < e.target.parentElement.children.length; x++) {
            currentOption = e.target.parentElement.children[x];

            if (currentOption.classList.contains('form-label--inlineSmall')) {
                currentOptionTitle = currentOption.innerText.split(':')[0].trim();
            }
        }

        if (document.querySelector(`#pleximisation-product-${currentOptionTitle.toLowerCase()}`)) {
            document.querySelector(`#pleximisation-product-${currentOptionTitle.toLowerCase()}`).value = optionValue;
        }
    });

    for (let i = 0; i < document.querySelectorAll('.form-option').length; i++) {
        document.querySelectorAll('.form-option')[i].addEventListener('click', () => {
            // updateChargesBlock();
        });
    }

    for (let i = 0; i < document.querySelectorAll('.form-increment .button.button--icon').length; i++) {
        document.querySelectorAll('.form-increment .button.button--icon')[i].addEventListener('click', () => {
            updateChargesBlock();
        });
    }
});
