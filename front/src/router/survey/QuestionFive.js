import * as React from "react";
import { Typography, ToggleButtonGroup, ToggleButton, Box } from "@mui/material/";

export default function QuestionFive() {
  const [country, setCountry] = React.useState(() => [1]);

  const handleChange = (event, newCountry) => {
    setCountry(newCountry);
    console.log(country);
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        선호하는 와인 산지를 골라주십시오(중복가능)
      </Typography>
      <ToggleButtonGroup size="large" orientation="vertical" value={country} onChange={handleChange} fullWidth sx={{ mb: 3 }}>
        <Box>
          <ToggleButton value="1" sx={{ width: 360, height: 58 }}>
            프랑스
          </ToggleButton>
          <ToggleButton value="2" sx={{ width: 360, height: 58 }}>
            미국
          </ToggleButton>
        </Box>
        <Box>
          <ToggleButton value="3" sx={{ width: 360, height: 58 }}>
            이탈리아
          </ToggleButton>
          <ToggleButton value="4" sx={{ width: 360, height: 58 }}>
            칠레
          </ToggleButton>
        </Box>
        <Box>
          <ToggleButton value="5" sx={{ width: 360, height: 58 }}>
            포르투갈
          </ToggleButton>
          <ToggleButton value="6" sx={{ width: 360, height: 58 }}>
            호주
          </ToggleButton>
        </Box>
        <Box>
          <ToggleButton value="7" sx={{ width: 360, height: 58 }}>
            스페인
          </ToggleButton>
          <ToggleButton value="8" sx={{ width: 360, height: 58 }}>
            뉴질랜드
          </ToggleButton>
        </Box>
      </ToggleButtonGroup>
    </>
  );
}
