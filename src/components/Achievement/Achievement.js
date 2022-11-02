import { Box,  } from '@mui/system'
import { Grid ,Typography} from '@mui/material';
import React from 'react'
import AchievementCard from '../AchievementCard/AchievementCard';
import './Achievement.css'
import EastIcon from '@mui/icons-material/East';

const Achievement = () => {
 
    const achievements = [{'title':'ESTABLISHED1','desc':'it is a long established fact that a reader will be distracted by the It is  fact that a reader will be distracted by '},
    {'title':'ESTABLISHED2','desc':'it is a long established fact that a reader will be distracted by the It is  fact that a reader will be distracted by '},
    {'title':'ESTABLISHED3','desc':'it is a long established fact that a reader will be distracted by the It is  fact that a reader will be distracted by '},
    {'title':'ESTABLISHED4','desc':'it is a long established fact that a reader will be distracted by the It is  fact that a reader will be distracted by '},
    ]
    
    const len = achievements.length;
    let item=0;
  return (
    <>
       <Box className='Achievements-container'  sx={{ textAlign: 'center' ,marginBottom:{ xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '2.5rem' }}}>
       <Box class="title" mb={5}>
      <Typography variant='h2' color='#323232'  marginBottom={{ xs: '2rem', sm: '2.5rem', md: '3.0rem', lg: '4rem' }} fontSize={{ xs: '2.5rem', sm: '3rem', md: '4rem' }} >ACHIEVEMENTS</Typography>
      </Box>
       
           
        <Grid  columnSpacing={5} sx={{width:'100%',justifyContent:'center',display:'flex', flexWrap: 'wrap' }} >
                {achievements.slice(0,4).map((element) => {
                    {len===0 ? <div className='no-achievements'></div> :
                   
                    item = item +1;
                    
                    return( <>
                    { (item) % 2!==0 ? 
                    (
                     <Grid className='Up-align' sx={{ marginRight:{xs:5,sm:4,md:5} , marginLeft:{xs:5,sm:4,md:5},marginBottom:{xs:6,sm:0,md:0}}}>
                    {<AchievementCard title={element.title} desc={element.desc}/>}
                    </Grid> ):
                    (

                        <Grid className='Down-align' sx={{marginTop:{xs:0,sm:15,md:15},marginRight:{xs:5,sm:4,md:5} , marginLeft:{xs:5,sm:4,md:5} , marginBottom:{xs:6,sm:0,md:0} }} >
                        <AchievementCard title={element.title} desc={element.desc}/>
                        </Grid>
                     )                     
                     }                                   
                     </>)
                    }                    
              })}                    
           </Grid>
        
           <Box className="Know-more" textAlign="center" sx={{ marginTop:{ xs: '-1rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }, fontSize:{ xs: '2.5rem', sm: '3rem', md: '4rem' }}} >
          <Typography variant='h6' className="know_text" sx={{'&:hover': {cursor: 'pointer',}}}>Know more <EastIcon className="arrow-icon" /></Typography>
          
        </Box>
      </Box>
              
    </>
  )
}
export default Achievement
