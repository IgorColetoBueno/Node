var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    console.log('Hello World by Igor!');
    next();
});

router.get('/', function (req, res) {
    res.render('index',{
        message:'Hello World for Template Engine'
    });
});

router.get('/params/:name', function (req, res) {
    res.json(
        {
            params: req.params,
            host: req.host,
            headers: req.headers
        })
});

router.post('/body', function (req, res) {
    res.json(req.body);
});

router.get('/res/:name', function (req, res) {
    res.json({
        name: req.params.name
    });
});
module.exports = router;