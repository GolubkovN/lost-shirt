(function() {
    let activeImg = document.querySelector(".product__img").src;

    document.querySelector(".colors__buttons").querySelectorAll('input').forEach( e => {
        e.onclick = (event) => {
            const arr = activeImg.split('');
            event.target.id >= 10 ? arr.splice(activeImg.length - 6, 2, event.target.id) : arr.splice(activeImg.length - 5, 1, event.target.id);
            document.querySelector(".product__img").src = arr.join('');
        };
    });
})();
