const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', (req, res)=>{
	res.render('home/admin_index', {name: 'admin', id:'123'});
});


router.get('/userlist', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/userlist', {users: results});
	});

})

module.exports = router;