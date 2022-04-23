// Проверяем, что страница загрузилась

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// Функция запуститься только когда страница будет полностью загружена

function ready() {

    // Кнопка "Удалить"
    let removeCartItemButtons = document.getElementsByClassName('btn-danger')

    for (b of removeCartItemButtons) {
        b.addEventListener('click', removeCartItem);
    }

    // Изменение количества
    let quantityInputs = document.getElementsByClassName('cart-quantity-input')

    for (let input of quantityInputs) {
        input.addEventListener('change', quantityChanged)
    }

    // Кнопка "Добавить в корзину"
    let addToCartButtons = document.getElementsByClassName('shop-item-button');

    for (let b of addToCartButtons) {
        b.addEventListener('click', addToCartClicked);
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

// Нажатие на кнопку "Купить"
function purchaseClicked() {
    alert('Спасибо за покупку!')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    // Удалить родителя родителя по клику на кнопку
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

// Добавление в корзину
function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')

    // Проверяем, есть ли в корзине уже такой товар
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Этот товар уже в корзине!')
            return
        }
    }
    let cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">Удалить</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.appendChild(cartRow)
    // Добавить event listeners
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}


// Обновить "Итого"

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0

    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        console.log(priceElement, quantityElement)
        let price = parseFloat(priceElement.innerText.replace('руб.', ''))
        let quantity = parseInt(quantityElement.value)
        total = total + (price * quantity)
        console.log(total)
    }
    // Округляем до двух знаков после запятой
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = total + ' руб.'
}