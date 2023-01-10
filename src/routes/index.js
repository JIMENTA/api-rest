const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.json({ "title": "App" })
});

module.exports = router;