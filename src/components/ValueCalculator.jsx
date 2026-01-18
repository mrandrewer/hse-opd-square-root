import { calculateRoot } from "../utils/mathOperations";
import React from 'react';
import { Box, TextField, Button, Alert, Typography, FormHelperText } from '@mui/material';

function ValueCalculator() {

    const [expression, setExpression] = React.useState('');
    const [precision, setPrecision] = React.useState('6');
    const [result, setResult] = React.useState(null);
    const [error, setError] = React.useState({
        hasError: false,
        message: ''
    });

    const handleExpressionChange = (event) => {
        setExpression(event.target.value);
        // Clear error when user starts typing
        if (error.hasError) {
            setError({ hasError: false, message: '' });
        }
    };

    const handlePrecisionChange = (event) => {
        setPrecision(event.target.value);
    };

    const calculate = () => {
        setResult(null);
        setError({ hasError: false, message: '' });
        if (expression === "") {
            setError({ hasError: true, message: 'Expression cannot be empty' });
            return;
        }
        try {
            const calculatedResult = calculateRoot(expression, parseInt(precision));
            setResult(calculatedResult);
        } catch (err) {
            setError({
                hasError: true,
                message: err.message ?? 'Invalid expression'
            });
        }
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                id="expression"
                name="expression"
                type="text"
                label="Expression"
                placeholder="4"
                required
                fullWidth
                variant="outlined"
                value={expression}
                onChange={handleExpressionChange}
            />
            <FormHelperText sx={{ ml: 0, '&:empty': { mt: 0 } }}>
                Enter expression
            </FormHelperText>
            <TextField
                id="precision"
                name="precision"
                type="number"
                min={0}
                max={64}
                fullWidth
                variant="outlined"
                value={precision}
                onChange={handlePrecisionChange}
            />
            <FormHelperText sx={{ ml: 0, '&:empty': { mt: 0 } }}>
                Enter precision value 0 and 64
            </FormHelperText>
            <Button
                variant="contained"
                onClick={calculate}
                sx={{ width: { xs: '100%', sm: 'fit-content' } }}
            >
                Calculate
            </Button>
            {/* Display Result */}
            {
                result !== null && !error.hasError && (
                    <Alert severity="success" sx={{ mt: 1 }}>
                        <Typography variant="body1">
                            Result: <strong>{result}</strong>
                        </Typography>
                    </Alert>
                )
            }

            {/* Display Error Alert */}
            {
                error.hasError && (
                    <Alert severity="error" sx={{ mt: 1 }}>
                        <Typography variant="body1">
                            {error.message}
                        </Typography>
                    </Alert>
                )
            }

        </Box>

    );
}

export default ValueCalculator;
