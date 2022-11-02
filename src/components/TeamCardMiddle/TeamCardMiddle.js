import { CardContent, Typography } from '@mui/material'

const TeamCardMiddle = (props) => {

    const truncate = (string, n) =>
        string?.length > n ? string.substr(0, n - 1) + "..." : string;

    return (
        <CardContent sx={{ marginTop: '6rem' }}>
            <Typography sx={{
                width: '100%',
                height: '20.46px',
                marginTop: '1rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '.8rem',
                lineHeight: '17px',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#2D2D2D'
            }} variant='h5' component='div'>
                {props.name}
            </Typography>
            <Typography variant='h5' sx={{
                height: '13px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '1rem',
                marginBottom: '1rem',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '11px',
                lineHeight: '13px',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#6B6969',
            }}  >
                {props.roll}
            </Typography>
            <Typography variant='body2' sx={{
                width: '136.15px',
                height: '32.07px',
                marginTop: '0.8rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '11px',
                lineHeight: '13px',
                textAlign: 'center',
                color: '#6F6F6F',
            }}>
                {truncate(props.intro, 75)}
            </Typography>
        </CardContent>
    )
}

export default TeamCardMiddle;