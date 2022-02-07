import React, { Component } from "react";

import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Slick extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "ease",
      responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };

    const urls = [
      '/logos/mercadoLivre.png', 
      '/logos/climaster.png', 
      '/logos/maxiar.jpg', 
      '/logos/shoppub.svg', 
      '/logos/tray.png',
      '/logos/arquiteturaTermica.png',
      '/logos/unica.jpg',
      '/logos/adias.png',
      '/logos/ypay.png',
    ]
    
    return (
      <Box width='100%' p='8' borderRadius='2xl'>
        <Slider {...settings}>
          {urls.map(url => (
            <>
            <Box>
              <Image width={{ base: '60%', md: '80%', xl: '70%' }} src={url} />
            </Box>
            </>
          ))}
        </Slider>
      </Box>
    );
  }
}
