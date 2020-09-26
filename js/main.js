var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 3000,
  },
});
var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // autoplay: {
  //   delay: 3000,
  // },
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

$(".newsletter").parallax({ imageSrc: "./img/newsletter-bg.jpg" });
