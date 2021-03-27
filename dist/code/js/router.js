const content = 
`const { Router } = require('express');
const router = Router();

//importing all routes here
router.get('/', (req, res) => res.json({ hello: 'Wordl' }));

module.exports = router;
`
module.exports = content
