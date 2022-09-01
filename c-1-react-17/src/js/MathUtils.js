const MathUtils = {
   range: (min, max) => Array.from({ length: max - min + 1 }, (_, index) => index + min),
   sum: (numbers) => numbers.reduce((prevSumResult, currentNumber) => prevSumResult + currentNumber, 0),
   random: (min, max) => Math.floor(Math.random() * (max - min) + min),
   randomSumIn: (arr, max) => {
      const sets = [[]];
      const sums = [];

      for(let i = 0; i < arr.length; i++) {
         for(let j = 0, len = sets.length; j < len; j++) {
            const candidateSet = sets[j].concat(arr[i]);
            const candidateSum = MathUtils.sum(candidateSet);
            if (candidateSet <= max) {
               sets.push(candidateSet);
               sums.push(candidateSum);
            }
         }
      }

      return sums[MathUtils.random(0, sums.length)];
   }
}

export default MathUtils;