/* */
const headers = document.querySelectorAll('.accordion_header');
const accordion_items = document.querySelectorAll('.accordion_item');

/* */
headers.forEach(function (header) {
    header.addEventListener('click', function () {
        const item = this.parentNode;
        const is_active = item.classList.contains('accordion_item--active');
       
        accordion_items.forEach(function (item) {
            item.classList.remove('accordion_item--active');
            item.classList.add('accordion_item--closed');
        });

        if (!is_active) { 
            item.classList.add('accordion_item--active');
            item.classList.remove('accordion_item--closed');
        };
    });
});