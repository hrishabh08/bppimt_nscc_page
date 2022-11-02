import React from "react";
import { Stack } from "@mui/material";
import InitiativeCard from "./InitiativeCard";

const InitiativeCards = ({ INITIATIVES_DATA }) => {
  return (
    <Stack
      direction="row"
      spacing={{ xs: 0, sm: 0, md: 4, xl: 4 }}
      justifyContent="center"
      alignItems="center"
      sx={{ flexWrap: "wrap", gap: 4 }}
    >
      <InitiativeCard INITIATIVE_DATA={INITIATIVES_DATA[0]} />
      <InitiativeCard INITIATIVE_DATA={INITIATIVES_DATA[1]} />
      <InitiativeCard INITIATIVE_DATA={INITIATIVES_DATA[2]}/>
    </Stack>
  );
};

export default InitiativeCards;
