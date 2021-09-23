const isValidRegex = (pattern, attr = 'g') => value => {
    const regularExpression = new RegExp(pattern, attr);
  
    return value.match(regularExpression) !== null;
}

const isValidLetters = isValidRegex('^[ATCG,]*$', 'i')

const validConsultParams = (req, res, next) => {
  if (!req.body.dna || !isValidLetters(req.body.dna.toString())) {
    const error = new Error();
    error.status = 400;
    error.message = "Invalid dna";
    throw error;
  }
    
  next();
}

  module.exports = validConsultParams;