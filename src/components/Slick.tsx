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
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
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
    
    return (
      <Box width='100%' p='8' borderRadius='2xl'>
        <Slider {...settings}>
          <Box>
            <Image width={{ base: '60%', md: '80%', xl: '70%' }} src='/mercadoLivre.png'/>
          </Box>
          <Box>
            <Image width={{ base: '60%', md: '80%', xl: '70%' }} src='/mercadoLivre.png'/>
          </Box>
          <Box>
            <Image width={{ base: '60%', md: '80%', xl: '70%' }}  src='/mercadoLivre.png'/>
          </Box>
          <Box>
            <Image width={{ base: '60%', md: '80%', xl: '70%' }} src='/mercadoLivre.png'/>
          </Box>
          <Box>
            <Image width={{ base: '60%', md: '80%', xl: '70%' }} src='/mercadoLivre.png'/>
          </Box>
          <Box>
            <Image width={{ base: '60%', md: '80%', xl: '70%' }} src='/mercadoLivre.png'/>
          </Box>
        </Slider>
      </Box>
    );
  }
}
