var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 3000,
  },
});

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [43.079969, 5.889569],
      zoom: 15,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );
  myMap.geoObjects.add(
    new ymaps.Placemark(
      [43.079969, 5.889569],
      {
        balloonContent: "Мой <strong>Отель</strong>",
        iconCaption: "GRAND HILTON HOTEL",
      },
      {
        preset: "islands#greenDotIconWithCaption",
      }
    )
  );
}
