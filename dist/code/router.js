const content = 
`import {Router} from 'express'
const router = Router();

//importing all routes here
router.get('/', (req, res) => res.json({ hello: 'Wordl' }));

export default router;
`

module.exports = content
