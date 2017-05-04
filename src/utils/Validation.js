const validateParam = (param, type) => {
	if (param === undefined) {
		throw(`Param '${ param }' must be defined!`);
	}
	if (typeof param !== type) {
		throw(`Param '${ param }' has wrong type! Proper type is ${ type }`)
	}
	return param;
};

export { validateParam } 