System.config({
    baseURL: '/',
    paths: { '*': '*.js' }
});
System.import('main')
    .catch(function (e) { return console.error(e, 'Can not import modules!'); });