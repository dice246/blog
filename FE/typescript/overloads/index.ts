function info(data: string):string;
function info(data: { name: string }):object;
function info(data: {name: string} | string): any {
	if (typeof data === 'object') {
		return { name: data}
	} else {
		return data
	}
}

info('hello');
info({name: 'world'})