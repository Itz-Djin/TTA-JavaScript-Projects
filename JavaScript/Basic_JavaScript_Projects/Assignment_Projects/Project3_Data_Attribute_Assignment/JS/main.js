
const items = document.querySelectorAll('[data-category]');
console.log(items);

items.forEach(item => {
    if (item.dataset.category === 'cars') {
        console.log(item);
    }
});