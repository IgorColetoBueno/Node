var express = require('express');
var router = express.Router();

router.get('/hello', function (req, res) {
    res.json({
        message: 'Hello world!'
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

router.post('/body', function(req,res){
     res.json(req.body);
});

router.get('/res/:name', function(req,res){
    res.json({
        name:req.params.name
    });
});
module.exports = router;