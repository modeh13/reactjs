const MathUtils = {
   range: (min, max) => Array.from({ length: max - min + 1 }, (_, index) => index + min)
}

export default MathUtils;