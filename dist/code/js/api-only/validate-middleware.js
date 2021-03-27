const content = `const { validationResult } = require('express-validator')

module.exports = function (req, res, next) {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.errors[0].msg,
    })
  }

  next()
}`

module.exports = content
