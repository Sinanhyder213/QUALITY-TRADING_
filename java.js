
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h3').innerText;
            const productPrice = product.querySelector('p').innerText;

            // Encode the message
            const message = encodeURIComponent(`I'd like to purchase ${productName} for ${productPrice}.`);
            const phoneNumber = '9037493068';
            const url = `https://wa.me/${phoneNumber}?text=${message}`;

            // Redirect to WhatsApp
            window.location.href = url;
        });
    });
});
