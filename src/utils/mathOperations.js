import * as math from 'mathjs';

function calculateRoot(expression, precision = null) {
    math.config({
        number: 'BigNumber',
        precision: precision ?? 64,
        relTol: 1e-60,
        absTol: 1e-63
    })
    const node = math.parse(`sqrt(${expression})`);
    const value = node.evaluate();
    return value.toString();
}

export { calculateRoot };