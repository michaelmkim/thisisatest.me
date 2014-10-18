var data_source = new Firebase('https://torid-fire-430.firebaseio.com/');
//data_source.remove();

var onComplete = function(error) {
	if (error)
		console.log('Synchronization failed');
	else
		console.log('Synchronization success');
};

data_source.remove(onComplete);