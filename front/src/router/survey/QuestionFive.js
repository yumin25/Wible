import * as React from "react";
import { Typography, ToggleButtonGroup, ToggleButton, Box } from "@mui/material/";

export default function QuestionFive() {
  const [country, setCountry] = React.useState(() => []);

  const handleChange = (event, newCountry) => {
    setCountry(newCountry);
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        선호하는 와인 산지를 골라주십시오(중복가능)
      </Typography>
      <ToggleButtonGroup size="large" value={country} onChange={handleChange} fullWidth sx={{ mb: 3 }}>
        <ToggleButton value="fra" sx={{ width: 300, height: 58 }}>
          프랑스
        </ToggleButton>
        <ToggleButton value="usa" sx={{ width: 300, height: 58 }}>
          미국
        </ToggleButton>
        <ToggleButton value="ita" sx={{ width: 300, height: 58 }}>
          이탈리아
        </ToggleButton>
        <ToggleButton value="chi" sx={{ width: 300, height: 58 }}>
          칠레
        </ToggleButton>
        <ToggleButton value="por" sx={{ width: 300, height: 58 }}>
          포르투갈
        </ToggleButton>
        <ToggleButton value="aus" sx={{ width: 300, height: 58 }}>
          호주
        </ToggleButton>
        <ToggleButton value="esp" sx={{ width: 300, height: 58 }}>
          스페인
        </ToggleButton>
        <ToggleButton value="nzl" sx={{ width: 300, height: 58 }}>
          뉴질랜드
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
