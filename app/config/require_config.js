(function() {
    requirejs.onError = function(err) {
        console.error(err && (err.stack || err.message || err.toString()) || err);
        throw err;
    };

    requirejs.config({
        baseUrl: './',
        paths: {
            shared_require_config: 'config/shared_require_config'
        }
    });

    require(['shared_require_config']);
})();