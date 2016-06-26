var response = {
	unix: null,
	natural: null
};

exports.response = function() {
	return response;
};

function setUnix(str) {
	response.unix = str;
	response.natural = new Date(Number(str)).toDateString();
}

function setNatural(str) {
	response.unix = Date.parse(str);
	response.natural = new Date(str).toDateString();
}

function reset() {
	response.unix = null;
	response.natural = null;
}

exports.select = function select(str, res, obj) {
	if(!/\D/.test(str)) {
		setUnix(str);
		res.json(obj);
		reset();
	}
	if(/\D/.test(str) && !Number.isNaN(Date.parse(str))) {
		setNatural(str);
		res.json(obj);
		reset();
	}
};