const content = 
`
const locals = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken()
}

module.exports = locals
`

module.exports = content