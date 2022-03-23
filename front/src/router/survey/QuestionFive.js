import { Typography, ToggleButtonGroup, ToggleButton, Box } from "@mui/material/";

export default function QuestionFive(props) {
  const country = props.country;
  const handleChange = (event, newCountry) => {
    props.setCountry(newCountry);
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        선호하는 와인 산지를 골라주십시오(중복가능)
      </Typography>
      <ToggleButtonGroup size="large" value={country} onChange={handleChange} fullWidth sx={{ mb: 3 }}>
        <ToggleButton value="france" sx={{ width: 290, height: 58 }}>
          프랑스
        </ToggleButton>
        <ToggleButton value="america" sx={{ width: 290, height: 58 }}>
          미국
        </ToggleButton>
        <ToggleButton value="italy" sx={{ width: 320, height: 58 }}>
          이탈리아
        </ToggleButton>
        <ToggleButton value="chile" sx={{ width: 290, height: 58 }}>
          칠레
        </ToggleButton>
        <ToggleButton value="portugal" sx={{ width: 320, height: 58 }}>
          포르투갈
        </ToggleButton>
        <ToggleButton value="australia" sx={{ width: 290, height: 58 }}>
          호주
        </ToggleButton>
        <ToggleButton value="spain" sx={{ width: 290, height: 58 }}>
          스페인
        </ToggleButton>
        <ToggleButton value="newZealand" sx={{ width: 320, height: 58 }}>
          뉴질랜드
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
