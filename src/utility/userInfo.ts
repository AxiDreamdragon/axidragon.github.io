export const onDesktop = () => {
	const userAgent = navigator.userAgent.toLowerCase();
	if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
		return false;
	}
	else {
		return true;
	}
}

export const onFireFox = () => {
	return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}
