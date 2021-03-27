const content = 
`import { validationResult } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

export default function (req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.errors[0].msg,
    })
  }

  next()
}`

module.exports = content
