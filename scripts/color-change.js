(function() {

   const elem = document.querySelector('.product__list');
    const iso = new Isotope( elem, {
  
  itemSelector: '.product__item',
  filter: '.black'
  });


    const controlls = document.querySelectorAll(".button");
    const activeClass = "buttons__item--active";

    controlls.forEach(function(control) {
      
      control.addEventListener("click", function(e) {
          e.preventDefault();

          const filterName = control.getAttribute("data-button");

          controlls.forEach(function(link){
              link.closest(".buttons__item").classList.remove(activeClass);
          })
         control.closest(".buttons__item").classList.add(activeClass);

        iso.arrange({
            filter: `.${filterName}`
        })
      })
    })

  })();