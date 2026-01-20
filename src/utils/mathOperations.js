import * as mathjs from 'mathjs';

const mathCalcConfig = {
    number: 'BigNumber',
    precision: 64,
    relTol: 1e-60,
    absTol: 1e-63

};

function calculateRoot(expression, precision = 64) {
    const math = mathjs.create(mathjs.all, mathCalcConfig);
    const node = math.parse(`sqrt(${expression})`);
    const value = node.evaluate();
    return math.format(value, { precision: precision });
}

function simplifyRoot(expression) {
    const math = mathjs.create(mathjs.all);
    const customRules = [
        ...math.simplify.rules,
        { l: 'sqrt(n1) * sqrt(n2)', r: 'sqrt(n1 * n2)' },
        { l: 'sqrt(n1 * n2)', r: 'sqrt(n1) * sqrt(n2)' },
        { l: 'sqrt(n1) / sqrt(n2)', r: 'sqrt(n1 / n2)' },
        { l: 'sqrt(n1 / n2)', r: 'sqrt(n1) / sqrt(n2)' },
        { l: 'sqrt(c / n1)', r: 'c / sqrt(n1)' },
        { l: 'sqrt(n1^2 * n2)', r: 'abs(n1) * sqrt(n2)' },
        { l: 'sqrt(n1)', r: '(n1)^(1/2)' },
        { l: '(n1)^(1/2)', r: 'sqrt(n1)' },
    ];
    const node = math.parse(`sqrt(${expression})`);
    const simplified = math.simplify(node, customRules, {}, { consoleDebug: true });
    return simplified.toString();
}

export { calculateRoot, simplifyRoot };