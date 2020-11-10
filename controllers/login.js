const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 		= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{

	var user = {
		username: req.body.username,
		password: req.body.password
	};

	userModel.validate(user, function(status){
		var rslt = JSON.stringify(status)
		console.log(rslt.password);
		if(req.body.job == "admin"){
			//res.cookie('uname', req.body.username);
			res.redirect('/admin_home');
		}
		else if(req.body.job == "employee"){
			//res.cookie('uname', req.body.username);
			res.redirect('/employee_home');
		}
		else{
			res.redirect('/login');
		}
	});
}); 

module.exports = router;