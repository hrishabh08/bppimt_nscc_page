import React from 'react'
import { Box, Typography } from '@mui/material'
import InitiativeCards from '../InitiativeCards/InitiativeCards'
import INITIATIVES_DATA from "../../assets/MOCK_DATA.json"

const Initiatives = () => {
  return (
    <Box sx={{
      margin: "1rem 2rem 10rem",
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center"
    }}
    marginBottom={{ xs: '3rem', sm: '3rem', md: '3.5rem', lg: '5rem' }}
    >
      <Box class="title" mb={5}>
      <Typography variant='h2' color='#323232' marginBottom={{ xs: '2rem', sm: '3rem', md: '3.5rem', lg: '4rem' }} fontSize={{ xs: '2.5rem', sm: '3rem', md: '4rem' }} >INITIATIVES</Typography>
      </Box>
      <InitiativeCards INITIATIVES_DATA={INITIATIVES_DATA} />
      </Box>
  )
}

export default Initiatives