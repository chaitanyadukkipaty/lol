var express = require("express");
var router = express.Router();

router.get('/',function(req, res){
	res.send("Hello Nigga!");
});
router.get('/w',function(req, res){
	res.send("Hello w!");
});
router.get('/:id',function(req, res){
	res.send("Id = "+req.params.id)
})

module.exports = router;