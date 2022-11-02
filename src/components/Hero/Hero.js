import React from 'react'
import { Box } from '@mui/material'
import Banner1 from '../../assets/images/Banner1.jpg'
import Banner2 from '../../assets/images/Banner2.jpg'
import Banner3 from '../../assets/images/Banner3.png'

const Hero = () => {
  return (
    <Box marginBottom={{ xs: '3rem', sm: '3rem', md: '3.5rem', lg: '5rem' }} id='home'>
      <picture>
      <source srcset={Banner1} media="(min-width: 1200px)" />
      <source srcset={Banner3} media="(min-width: 500px)" />
      <img src={Banner2} width="100%" alt='hero-image'></img>
      </picture>
    </Box>
  )
}

export default Hero