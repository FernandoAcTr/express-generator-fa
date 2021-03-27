const content = 
`import { Request, Response, NextFunction } from 'express'
import { validationResult, Result, ValidationError } from 'express-validator'

export default function (req: Request, res: Response, next: NextFunction) {
  const errors: Result<ValidationError> = validationResult(req)

  const arrayErrors = errors.array()

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: arrayErrors[0].msg,
    })
  }

  next()
}`

module.exports = content
