const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

})

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelectorAll('.tabs__btn').forEach(function(tabContent) {
        tabContent.classList.remove('tabs__btn-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
      document.querySelector(`[data-path="${path}"]`).classList.add('tabs__btn-active')
    })
  })
})


var x = document.getElementById("contain");

x.addEventListener("click", myFunction);

function myFunction() {
  var element = document.getElementById("nav");
  element.classList.toggle("open");

  x.classList.toggle("change");
}

// accordion start

$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content",
    collapsible: true,
    icons: false,
    active: false
  });
  $("#accordion").on("accordionactivate", function( event, ui ) {
    $('.item').removeClass('active');
    $('.ui-state-active').parent().addClass('active');
  } );
} );

// accordion stop
