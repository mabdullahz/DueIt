// keys.js -- this figures out logic
if(process.env.NODE_ENV === 'production'){
	// we in dev
	module.exports = require('./prod');
}else{
	// we in prod
	module.exports = require('./dev');
}