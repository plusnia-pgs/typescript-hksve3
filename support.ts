var support = {}

var xhrSupported = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;