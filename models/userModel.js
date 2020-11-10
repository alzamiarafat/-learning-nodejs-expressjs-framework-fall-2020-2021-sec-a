const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from users where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			//console.log(results.row[2]);
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){
		var sql = "select * from users where username='"+user.username+"'";
			db.getResults(sql, function(results){
				if(results.length >0 ){
					callback(true);
				}else{
					callback(false);
			}
		});
	},
	getAll: function(callback){
		var sql = "select * from user";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO users (id, 'username', 'password', 'job', 'email', 'address') VALUES ('"+address+"','"+address+"','"+address+"','"+address+"','"+address+"','"+address+"')";
			db.getResults(sql, function(results){
				if(results.length >0 ){
					callback(true);
				}else{
					callback(false);
			}
		});
		
	},
	update:function(user, callback){

	},
	delete: function(id, callback){
		var sql = "DELETE FROM users WHERE id="+id+" ";
			db.getResults(sql, function(results){
				if(results.length >0 ){
					callback(true);
				}else{
					callback(false);
			}
		});
		

	}
}