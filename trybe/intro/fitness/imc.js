

// function imc(height, weight) {}

const imc = (height, weight) => {
  // return (weight / height * height)
  // return (weight / height ** 2)
  return (weight / Math.pow(height, 2)).toFixed(2)
}

module.exports = { imc };