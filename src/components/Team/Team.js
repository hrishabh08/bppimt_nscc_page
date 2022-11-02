import { Stack, Typography, IconButton } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../../assets/nscc_members_details.json';
import TeamCard from '../TeamCard/TeamCard';
import { settings } from './slidersettings'
import { carouselSettings } from './carouselsettings'
import styles from './Teamstyle.module.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Team = () => {

    const renderNextButton = ({ isDisabled }) => {
        return <ArrowCircleRightOutlinedIcon />
      };
    
      const renderPrevButton = ({ isDisabled }) => {
        return <ArrowCircleLeftOutlinedIcon />
      };

    return (
        <Stack id="team" sx={{ width: '100vw', alignItems: 'center' }} marginTop={{ xs: '2rem', sm: '3rem', md: '3.5rem', lg: '5rem' }} marginBottom={{ xs: '2rem', sm: '3rem', md: '3.5rem', lg: '5rem' }}>
            
            <Typography component='h1' sx={{
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '3rem',
                textTransform: 'uppercase',
                color: '#323232',
            }} fontSize={{ xs: '2.5rem', sm: '3rem', md: '4rem' }} marginBottom={{ xs: '2rem', sm: '3rem', md: '3.5rem', lg: '5rem' }} >TEAM</Typography>
            <Stack marginLeft='auto' marginRight='auto' alignItems='center' justifyContent='center' spacing={3}>
                <Stack className={styles.team_container} row='true' sx={{
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                }} >
                    {/* <Slider {...settings}>
                        {
                            data.map((item, i) => <TeamCard key={i} item={item} />)
                        }
                    </Slider> */}
                    <AliceCarousel 
                        renderPrevButton={renderPrevButton}
                        renderNextButton={renderNextButton}
                        {...carouselSettings}>
                    {
                        data.map((item, i) => <TeamCard key={i} item={item} />)
                    }
                    </AliceCarousel>

                </Stack>
                {/* <Stack direction='row' sx={{
                    alignItems: 'center',
                    cursor: 'pointer',
                    jsutifyContent: 'center',
                    paddingTop: '1rem'
                }}>
                    <Typography sx={{
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '1.125rem',
                        lineHeight: '19px',
                        color: 'black',
                        alignItems: 'center',
                    }}>Know More
                    </Typography>
                    <IconButton size='medium'><ArrowForwardIcon style={{color: 'black'}}/></IconButton>
                </Stack> */}
            </Stack>

        </Stack >
    )
}

export default Team;