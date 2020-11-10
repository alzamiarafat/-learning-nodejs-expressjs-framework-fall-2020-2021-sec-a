const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from users where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0].job);
			}
		});
	},
	getById: function(id, callback){
		var sql = "select * from users WHERE username = '"+id.username+"'";
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	getAll: function(callback){
		var sql = "select * from users";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user_create, callback){
		var sql = "INSERT INTO users(name, username, password, job, company_name, contact) VALUES ('"+user_create.name+"' ,'"+user_create.username+"', '"+user_create.password+"', 'employee', '"+user_create.com_name+"', '"+user_create.contact+"')";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});

	},
	update:function(id,user_update, callback){
		var sql = "UPDATE users SET name='"+user_update.name+"',password='"+user_update.password+"',company_name='"+user_update.com_name+"',contact='"+user_update.contact+"' WHERE username='"+id.username+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});


	},
	delete: function(id, callback){
		var sql = "DELETE FROM users WHERE username='"+id.username+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});

	}
}