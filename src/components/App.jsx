import ValueCalculator from './ValueCalculator.jsx'
import FormulaCalculator from './FormulaCalculator.jsx';
import Button from '@mui/material/Button';
import '../styles/App.scss'

function App() {
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>√ Square Root Calculator</h1>
          <p>Calculate and simplify square root expressions with variables</p>
        </div>
        <div>
          <Button variant="contained" color="primary">
            My First MUI Button
          </Button>
          <ValueCalculator />
          <FormulaCalculator />
        </div>
      </div>
    </>
  )
}

export default App;
