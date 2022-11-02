import React from 'react'
import { Card,CardMedia,CardContent,CardActions,Typography ,Button ,Link} from '@mui/material'
import Ach from '../../assets/icons/Ach1.jpg'
import './AchievementCard.css'
import { Box,  } from '@mui/system'

const AchievementCard = (props) => {
  return (
    
      <Card className='Achievement-card' sx={ { display: "flex", flexDirection: "column", alignItems: "center" ,boxShadow: '4px 4px 2px rgba(0, 0, 0, 0.25)', width:{xs:'16rem',sm:'13rem',md:'13rem'}}}>
        <CardMedia
        component="img" className='image'
        image={Ach}
        alt="..."
        />
        <CardContent>
        <Box className='card-title' sx={{ width:'100%',display: "flex",justifyContent:'center'}}>{props.title}</Box>
        <Box className='card-desc' sx={{width:{xs:'13.7rem',sm:'10.50rem',md:'10.50rem'}}}>
            {props.desc}
        </Box>
        </CardContent>
        <CardActions>
            <a className='more'>More</a>
        </CardActions>
        </Card>
   
  )
}

export default AchievementCard
