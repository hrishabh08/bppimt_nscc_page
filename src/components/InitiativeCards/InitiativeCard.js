import React from "react";
import cardStyles from './InitiativeCard.module.css'
import { Box } from "@mui/material";
import HealthyCodingEnviromentImage from '../../assets/images/HealthyCodingEnvironment.jpg'
import ShowcasingTalentImage from '../../assets/images/ShowcasingTalent.jpg'
import CodingContest from '../../assets/images/CodingContest.jpg'

const InitiativeCard = ({INITIATIVE_DATA}) => {
  const image = INITIATIVE_DATA.id == 1 ? HealthyCodingEnviromentImage : (INITIATIVE_DATA.id == 2 ? ShowcasingTalentImage : CodingContest)
  return (
    <div>
      <article class={cardStyles.card}>
        <Box sx={{
          width: 'auto',
          height: '260px',
          background: `url(${image}) no-repeat center`,
          backgroundSize: 'cover',
          borderRadius: '3px'
          }}>
        </Box>
        <div class={cardStyles.infos}>
          <h2 class={cardStyles.title}>
            {INITIATIVE_DATA.title}
          </h2>
          <h3 class={cardStyles.date}>{INITIATIVE_DATA.sub_title}</h3>
          <h3 class={cardStyles.seats}>Initiative</h3>
          <p class={cardStyles.txt}>
          {INITIATIVE_DATA.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default InitiativeCard;
