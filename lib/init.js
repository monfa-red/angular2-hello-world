// System.config({
//     baseURL: '/',
//     // paths: { '/lib/': '*.js' }
//     // paths: '/lib'
// });
System.import('main')
    .catch(function (e) { return console.error(e, 'Can not import module!'); });