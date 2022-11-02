import { Card, CardActions, Link } from '@mui/material'
import { TbBrandLinkedin, TbBrandGithub, TbBrandInstagram } from 'react-icons/tb'
import TeamCardMiddle from '../TeamCardMiddle/TeamCardMiddle';
import TeamCardUpper from '../TeamCardUpper/TeamCardUpper';

const TeamCard = (props) => {

    return (
        <Card sx={{
            width: '12rem',
            height: '18rem',
            borderRadius: '10px',
        }}>
            <TeamCardUpper image={props.item.Profile_Picture} />

            <TeamCardMiddle name={props.item.Name} roll={props.item.Roll_in_NSCC} intro={props.item.Short_Intro} />

            <CardActions sx={{
                marginLeft: 'auto',
                marginRight: 'auto',
                justifyContent: 'center',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '1.4rem',
                lineHeight: '16px',
                color: '#6B6969',
            }}>
                {props.item.Linkedin_Profile_Link && props.item.Linkedin_Profile_Link !== 'NA' && <Link target="_blank" rel="noreferrer" href={props.item.Linkedin_Profile_Link} sx={{ color: '#6B6969' }}><TbBrandLinkedin /></Link >}
                {props.item.Github_Profile_Link && props.item.Github_Profile_Link !== 'NA' && <Link target="_blank" rel="noreferrer" href={props.item.Github_Profile_Link} sx={{ color: '#6B6969' }}><TbBrandGithub /></Link >}
                {props.item.Instagram_Profile_Link && props.item.Instagram_Profile_Link !== 'NA' && <Link target="_blank" rel="noreferrer" href={props.item.Instagram_Profile_Link} sx={{ color: '#6B6969' }}><TbBrandInstagram /></Link >}
            </CardActions>
        </Card>
    )
}

export default TeamCard;