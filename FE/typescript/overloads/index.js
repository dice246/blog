function info(data) {
    if (typeof data === 'object') {
        return { name: data };
    }
    else {
        return data;
    }
}
info('hello');
info({ name: 'world' });
