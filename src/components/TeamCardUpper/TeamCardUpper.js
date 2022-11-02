import { Box, CardMedia } from '@mui/material'

const TeamCardUpper = (props) => {
    return (
        <Box component='div' sx={{
            background: '#94E1D3',
            position: 'absolute',
            width: '12rem',
            height: '5rem',
            borderRadius: '10px 10px 0px 0px',
        }} >
            <CardMedia sx={{
                height: '5rem',
                width: '5rem',
                marginTop: '2.2rem',
                background: '#FFFFFF',
                border: '1px solid #94E1D3',
                borderRadius: '60px',
                marginLeft: 'auto',
                marginRight: 'auto',
            }} component='div' />
            <CardMedia sx={{
                height: '4.125rem',
                width: '4.125rem',
                marginTop: '-4.65rem',
                background: '#FFFFFF',
                borderRadius: '50px',
                marginLeft: 'auto',
                marginRight: 'auto',
            }} component='img' image={props.image} />
        </Box>
    )
}

export default TeamCardUpper;