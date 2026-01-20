import * as mathjs from 'mathjs';

const math = mathjs.create(mathjs.all);

function calculateRoot(expression, precision = 64) {
    math.config({
        number: 'BigNumber',
        precision: 64,
        relTol: 1e-60,
        absTol: 1e-63
    })
    const node = math.parse(`sqrt(${expression})`);
    const value = node.evaluate();
    return math.format(value, { precision: precision });
}

function simplifyRoot(expression) {
    // Access the default rules (optional, you can start with an empty array)
    const customRules = math.simplify.rules;

    // Add specific square root simplification rules
    customRules.push(
        // Rule 1: Factor out perfect squares from a constant operand in a product under a sqrt
        // This is a more complex logic that might be better suited as a function rule
        // The snippet below is a basic string rule for the product property
        'sqrt(c1 * n1) -> sqrt(c1) * sqrt(n1)',

        // Rule 2: Simplify a square root of a number squared, e.g., sqrt(x^2) -> x
        'sqrt(pow(n1, 2)) -> abs(n1)',

        // Rule 3: Use fractional exponents to leverage existing power simplification rules
        // This is powerful for general simplification
        'sqrt(n1) -> n1^0.5'
    );
    const node = math.parse(`sqrt(${expression})`);
    const simplified = math.simplify(node);
    return simplified.toString();
}

export { calculateRoot, simplifyRoot };