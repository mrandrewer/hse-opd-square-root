import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, TextField, Button, Alert, Typography, FormHelperText } from '@mui/material';
import { calculateRoot, simplifyRoot } from "../utils/mathOperations";

function ValueCalculator({ mode = "calculate" }) {
    const { t } = useTranslation();

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
            setError({ hasError: true, message: t("errors.emptyExpression") });
            return;
        }
        try {

            if (mode === "calculate") {
                const calculatedResult = calculateRoot(expression, parseInt(precision));
                setResult(calculatedResult);
            } else {
                const simplifiedExpression = simplifyRoot(expression);
                setResult(simplifiedExpression);
            }
        } catch (err) {
            let message = err.message ?? t("errors.invalidExpression");
            if (message.toLowerCase().includes("convert complex number to node")) {
                message = t("errors.unsupportedComplexSimplification");
            }
            setError({
                hasError: true,
                message: message
            });
        }
    }
    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                id="expression"
                name="expression"
                label={t("form.expressionLabel")}
                placeholder="4"
                required
                fullWidth
                variant="outlined"
                value={expression}
                onChange={handleExpressionChange}
            />
            <FormHelperText sx={{ ml: 0, '&:empty': { mt: 0 } }}>
                {t("form.expressionHint")}
            </FormHelperText>
            {mode === "calculate" && <>
                <TextField
                    id="precision"
                    name="precision"
                    label={t("form.precisionLabel")}
                    fullWidth
                    variant="outlined"
                    value={precision}
                    onChange={handlePrecisionChange}
                    slotProps={{
                        htmlInput: {
                            type: 'number',
                            min: 1,
                            max: 64,
                            step: 1
                        }
                    }}
                />
                <FormHelperText sx={{ ml: 0, '&:empty': { mt: 0 } }}>
                    {t("form.precisionHint")}
                </FormHelperText>
            </>
            }
            <Button
                variant="contained"
                onClick={calculate}
                sx={{ width: { xs: '100%', sm: 'fit-content' } }}
            >
                {t("form.btnCalculateLabel")}
            </Button>

            {/* Display Result */}
            {
                result !== null && !error.hasError && (
                    <Alert severity="success" sx={{ mt: 1 }}>
                        <Typography variant="body1">
                            {t("form.resultHint")}: <strong>{result}</strong>
                        </Typography>
                    </Alert>
                )
            }

            {/* Display Error Alert */}
            {
                error.hasError && (
                    <Alert severity="error" sx={{ mt: 1 }}>
                        <Typography variant="body1">
                            {t("form.resultHint")}: {error.message}
                        </Typography>
                    </Alert>
                )
            }

        </Box>

    );
}

export default ValueCalculator;
