import React from 'react';
import ValueCalculator from './ValueCalculator.jsx'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../styles/App.scss'
import { Container, Typography, Stack } from '@mui/material';

function App() {

  const [mode, setMode] = React.useState("calculate");
  const haldleMode = (event, newMode) => {
    setMode(newMode);
  };
  return (
    <Container maxWidth="sm">
      <Stack spacing={2}>
        <Typography variant="h4" >
          √ Square Root Calculator
        </Typography>
        <Typography variant="body1" >
          Calculate and simplify square root expressions with variables
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={mode}
          exclusive
          onChange={haldleMode}
          aria-label="calculation mode"
          sx={{ alignSelf: 'center' }}
        >
          <ToggleButton value="calculate" aria-label="calculate value">
            Calculate value
          </ToggleButton>
          <ToggleButton value="simplify" aria-label="simplify expression">
            Simplify expression
          </ToggleButton>
        </ToggleButtonGroup>
        <ValueCalculator mode={mode} />
      </Stack>
    </Container>
  )
}

export default App;
