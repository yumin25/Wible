import * as React from "react";
import { Typography, ToggleButtonGroup, ToggleButton } from "@mui/material/";

export default function QuestionOne() {
  const [wine, setWine] = React.useState("");

  const handleChange = (event, nextWine) => {
    setWine(nextWine);
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        마시고 싶은 와인의 종류를 골라주십시오.
      </Typography>
      <ToggleButtonGroup size="large" orientation="vertical" value={wine} exclusive onChange={handleChange} fullWidth sx={{ mb: 3 }}>
        <ToggleButton value="red" aria-label="red">
          레드와인
        </ToggleButton>
        <ToggleButton value="white" aria-label="white">
          화이트와인
        </ToggleButton>
        <ToggleButton value="rose" aria-label="rose">
          로제와인
        </ToggleButton>
        <ToggleButton value="sparkling" aria-label="sparkling">
          스파클링와인
        </ToggleButton>
        <ToggleButton value="dessert" aria-label="dessert">
          디저트와인
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
