$(document).ready(function () {
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

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Клик Клик");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Min length 2 characters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          tel: "Your phones number must be in the format of +7-000-00-00",
          required: "Enter your phone number",
        },
      },
    });
  });
});

$(".newsletter").parallax({ imageSrc: "./img/newsletter-bg.jpg" });

// modalButton.on("click"),
//   function () {
//     console.log("Вы кликнули по кнопке с атрибутом data-toggle=modal");
//   };
