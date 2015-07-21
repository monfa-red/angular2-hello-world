System.config({
    baseURL: '/',
});
System.import('main')
    .catch(function (e) { return console.error(e, 'Can not import module!'); });