import { Stack, Typography } from '@mui/material'
import NSCCSponserLogo from '../../assets/images/newton-school-sponsor-logo.png'
import styles from './Sponsorstyle.module.css'

const Sponsors = () => {
    return (
        <Stack col='true' sx={{
            marginLeft: 'auto',
            marginRight: 'auto',
            alignItems: 'center',
            padding: '1rem',
            overflow: 'hidden'
        }}
        marginBottom={{ xs: '3rem', sm: '3rem', md: '3.5rem', lg: '5rem' }}
        >
            <Typography component='h1' sx={{
                fontStyle: 'normal',
                fontSeight: '400',
                lineHeight: '3rem',
                textTransform: 'uppercase',
                color: '#323232'
            }} fontSize={{ xs: '2.5rem', sm: '3rem', md: '4rem' }} marginBottom={{ xs: '2rem', sm: '3rem', md: '3.5rem', lg: '4rem' }} >Sponsors</Typography>
            <Stack sx={{
                width: {
                    xs: '18rem',
                    sm: '20.5rem',
                    lg: '28.5rem'
                },
                height: '6.3125rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                background: '#FFFFFF',
                borderRadius: '15px',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <img className={styles.sponsorImage} src={NSCCSponserLogo} alt='Sponsors' />
            </Stack>
        </Stack>
    )
}

export default Sponsors;