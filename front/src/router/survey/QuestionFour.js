import * as React from "react";
import { Typography, ToggleButtonGroup, ToggleButton } from "@mui/material/";

export default function QuestionFour() {
  const [body, setBody] = React.useState();

  const handleChange = (event, nextBody) => {
    setBody(nextBody);
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        선호하는 와인의 바디감이 있으십니까?
      </Typography>
      <ToggleButtonGroup size="large" orientation="vertical" value={body} exclusive onChange={handleChange} fullWidth sx={{ mb: 3 }}>
        <ToggleButton value="1">가벼움</ToggleButton>
        <ToggleButton value="2">보통</ToggleButton>
        <ToggleButton value="3">무거움</ToggleButton>
        <ToggleButton value="0">잘모르겠어요</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
