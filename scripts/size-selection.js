(function() {
 
  const controlls = document.querySelectorAll(".size__item");
  const activeClass = "size__item--active";
   controlls.forEach(function(control) {

    control.addEventListener("click", function(e) {
      e.preventDefault();
     
      controlls.forEach(function(link) {
        link.closest(".size__item").classList.remove(activeClass);
      })
       control.closest(".size__item").classList.add(activeClass);
       })
    })
 
})();