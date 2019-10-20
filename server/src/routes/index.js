const { Router } = require('express');
        router = Router();

router.get('/create', (req, res) => {
    res.send('Received');
})

router.get('/articles', (req, res) => {

})

module.exports = router;
