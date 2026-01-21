import '../styles/App.scss'
import React from 'react';
import { useTranslation } from 'react-i18next';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Container, Typography, Stack } from '@mui/material';
import ValueCalculator from './ValueCalculator.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx';

function App() {
  const { t } = useTranslation();

  const [mode, setMode] = React.useState("calculate");
  const handleMode = (event, newMode) => {
    setMode(newMode);
  };

  React.useEffect(() => {
    document.title = t(`header`);
  }, [location.pathname, t]);

  return (
    <Container maxWidth="sm">
      <LanguageSwitcher />
      <Stack spacing={2}>
        <Typography variant="h4" >
          {t("header")}
        </Typography>
        <Typography variant="body1" >
          {t("description")}
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={mode}
          exclusive
          onChange={handleMode}
          aria-label="calculation mode"
          sx={{ alignSelf: 'center' }}
        >
          <ToggleButton value="calculate" aria-label="calculate value">
            {t("mode.calculate")}
          </ToggleButton>
          <ToggleButton value="simplify" aria-label="simplify expression">
            {t("mode.simplify")}
          </ToggleButton>
        </ToggleButtonGroup>
        <ValueCalculator mode={mode} />
      </Stack>
    </Container>
  )
}

export default App;
