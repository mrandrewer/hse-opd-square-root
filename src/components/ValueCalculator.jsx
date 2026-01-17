import { calculateRoot } from "../utils/mathOperations";
import { Box, FormControl, FormLabel, TextField, Button } from '@mui/material';

function ValueCalculator() {
    const calculate = () => {

    }
    const expressionError = "";
    const expressionErrorMessage = "";
    return (
        <Box
            noValidate
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 2,
            }}
        >
            <FormControl>
                <FormLabel htmlFor="expression">Expression</FormLabel>
                <TextField
                    error={expressionError}
                    helperText={expressionErrorMessage}
                    id="expression"
                    type="expression"
                    name="expression"
                    placeholder="4"
                    required
                    fullWidth
                    variant="outlined"
                    color={expressionError ? 'error' : 'primary'}
                />
            </FormControl>
            <Button
                variant="contained"
                onClick={calculate}
                sx={{ width: { xs: '100%', sm: 'fit-content' } }}
            >
                Calculate
            </Button>
        </Box>
    );
}

export default ValueCalculator;
