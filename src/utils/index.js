export const leastSquaresFitCalc = (map) => {
    const length = map.size;
    if (length < 2) {
        throw new Error("leastSquaresFit() map must be at least 2 values");
    }
    let resTotal = 0;
    let valueTotal = 0;
    map.forEach((value, res) => {
        resTotal = resTotal + res;
        valueTotal = valueTotal + value;
    });
    const resMean = resTotal / length;
    const valueMean = valueTotal / length;
    let multipliedDiff = 0;
    let squaredDiff = 0;
    map.forEach((value, res) => {
        const resDiff = res - resMean;
        const valueDiff = value - valueMean;
        multipliedDiff = multipliedDiff + resDiff * valueDiff;
        squaredDiff = squaredDiff + resDiff * resDiff;
    });
    const m = multipliedDiff / squaredDiff;
    const b = valueMean - m * resMean;
    return `calc(${m * 100}vw + ${b}px)`;
};
