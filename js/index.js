
const toggleMenu = () => document.body.classList.toggle("open");


document.addEventListener("DOMContentLoaded", function() {
  const carouselItems = document.querySelectorAll(".carousel-item");
  const carouselControls = document.querySelectorAll(".carousel-control-prev, .carousel-control-next");
  const carouselIndicators = document.querySelectorAll(".carousel-indicators li");

  let currentIndex = 0;

  // Función para mostrar el elemento actual
  function showItem(index) {
    carouselItems.forEach(function(item) {
      item.classList.remove("active");
    });

    carouselIndicators.forEach(function(indicator) {
      indicator.classList.remove("active");
    });

    carouselItems[index].classList.add("active");
    carouselIndicators[index].classList.add("active");
  }

  // Función para avanzar al siguiente elemento
  function nextItem() {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
      currentIndex = 0;
    }
    showItem(currentIndex);
  }

  // Función para retroceder al elemento anterior
  function prevItem() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = carouselItems.length - 1;
    }
    showItem(currentIndex);
  }

  // Evento para controlar el clic en el controlador siguiente
  carouselControls[1].addEventListener("click", function(e) {
    e.preventDefault();
    nextItem();
  });

  // Evento para controlar el clic en el controlador anterior
  carouselControls[0].addEventListener("click", function(e) {
    e.preventDefault();
    prevItem();
  });

  // Evento para controlar el clic en los indicadores
  carouselIndicators.forEach(function(indicator, index) {
    indicator.addEventListener("click", function() {
      showItem(index);
      currentIndex = index;
    });
  });

  // Mostrar el primer elemento al cargar la página
  showItem(currentIndex);
});
