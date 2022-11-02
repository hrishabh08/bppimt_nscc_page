import { Box, Stack, Link, Typography } from '@mui/material'
import { TbBrandFacebook, TbBrandLinkedin, TbBrandGithub, TbBrandInstagram, TbBrandDiscord, TbBrandGmail } from 'react-icons/tb'

const Footer = () => {
    return (
        <Stack sx={{
            width: '100vw',
            background: 'rgba(148, 225, 211, 0.34)',
            overflowX: 'hidden',
            // marginTop: '5rem',

        }}>
            <Stack spacing={{ xs: 2, lg: 25 }} direction={{ xs: 'column', lg: 'row' }} sx={{
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '16px',
                color: '#6B6969',
                padding: '1rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                alignItems: 'center'
            }} >
                <Typography component='h4'>&copy; 2022 BPPIMT Coding Club. All Rights Reserved.</Typography>
                <Box sx={{
                    fontSize: '25px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Link target="_blank" href='https://www.facebook.com/profile.php?id=100085739347218' sx={{ color: '#6B6969', cursor: 'pointer' }}><TbBrandFacebook /></Link >
                    <Link target="_blank" href='https://www.linkedin.com/groups/9231346' sx={{ color: '#6B6969', marginLeft: '0.5rem', cursor: 'pointer' }}><TbBrandLinkedin /></Link >
                    <Link target="_blank" href='https://github.com/Extendo37' sx={{ color: '#6B6969', marginLeft: '0.5rem', cursor: 'pointer' }}><TbBrandGithub /></Link >
                    <Link target="_blank" href='https://www.instagram.com/newto_nschoolbp97/' sx={{ color: '#6B6969', marginLeft: '0.5rem', cursor: 'pointer' }}><TbBrandInstagram /></Link >
                    {/* <Link target="_blank" href='#' sx={{ color: '#6B6969', marginLeft: '0.5rem', cursor: 'pointer' }}><TbBrandDiscord /></Link > */}
                    <Link target="_blank" href='mailto:newtonschool.nscc37@gmail.com' sx={{ color: '#6B6969', marginLeft: '0.5rem', cursor: 'pointer' }}><TbBrandGmail /></Link >
                </Box>
                <Stack spacing={{ xs: 3, lg: 0 }} direction={{ xs: 'row', lg: 'column' }} sx={{
                    width: '15rem',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '16px',
                    color: '#6B6969',
                    alignItems: 'start',
                    justifyContent: 'center'
                }}>
                    {/* <Link href='#' sx={{ color: '#6B6969', textDecoration: 'none' }}><Typography component='h4' marginLeft={{ lg: '4rem' }}>Gallery</Typography></Link > */}
                    <Link target="_blank" href='mailto:newtonschool.nscc37@gmail.com' sx={{ color: '#6B6969', textDecoration: 'none' }}><Typography component='h4' marginLeft={{ lg: '4rem' }}>Contact Us</Typography></Link >
                    <Link href='#' sx={{ color: '#6B6969', textDecoration: 'none' }}><Typography component='h4' marginLeft={{ lg: '4rem' }}>About</Typography></Link >
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Footer;