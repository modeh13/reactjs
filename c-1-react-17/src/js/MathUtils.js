const MathUtils = {
   range: (min, max) => Array.from({ length: max - min + 1 }, (_, index) => index + min),
   sum: (numbers) => numbers.reduce((prevSumResult, currentNumber) => prevSumResult + currentNumber),
   random: (min, max) => Math.floor(Math.random() * (max - min) + min)
}

export default MathUtils;