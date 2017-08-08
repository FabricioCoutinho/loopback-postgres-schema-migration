'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);

	let schemas = Object.keys(server.dataSources).filter(function(i){
		return i;
	});


	schemas.forEach(function(schema) {
		server.dataSources[schema].autoupdate( function(err) {
		   	if (err) throw err;
		});
	});	
};
