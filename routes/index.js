var express = require('express');
var router = express.Router();

var mysql = require('./mysql');

/* GET home page. */
router.get('/test', function(req, res, next) {
  
  mysql.fetchData(function(err,rows){ 

  	 res.json({ err , rows });

   },'SELECT * FROM user');

 
});



router.post('/ajax', function(req,res)
{
	var response = '';

	switch(req.body.type) {

		case 'register-user':  
			
			let name = req.body.name;
			let email = req.body.email;
			let password = req.body.password;

			mysql.fetchData(function(err,rows){ 


			  	 res.json({ err,rows });
			  	 res.end();

			   },'INSERT INTO user VALUES("'+name+'","'+email+'","'+password+'")');

		break;

		case 'login-user':  
			
			let email1 = req.body.email;
			let password1 = req.body.password;

			mysql.fetchData(function(err,rows){ 

			  	 res.json({ err,rows });
			  	 res.end();

			   },'SELECT * FROM user where email="'+email1+'" AND password="'+password1+'"'); 

		break;

	}


	// res.json({ 'result' : response });
});


module.exports = router;
