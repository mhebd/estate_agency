function sliderSettings(slidesToShow = 1, slidesToScroll = 1, responsive = false) {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    autoplay: true,
  };

  if (responsive)
    setting.responsive = [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ];

  return setting;
}

export default sliderSettings;
