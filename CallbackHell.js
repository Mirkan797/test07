function hell(win) {
    // for listener purpose
    return function() {
        loadLink(win, REMOTE_SRC+'/assets/css/style.css', function() {
            loadLink(win, REMOTE_SRC+'/lib/async.js', function() {
                loadLink(win, REMOTE_SRC+'/lib/easyXDM.js', function() {
                    loadLink(win, REMOTE_SRC+'/lib/json2.js', function() {
                        loadLink(win, REMOTE_SRC+'/lib/underscode.min.js', function() {
                            loadLink(win, REMOTE_SRC+'/lib/backbone.min.js', function() {
                                loadLink(win, REMOTE_SRC+'/dev/base_dev.js', function() {
                                    loadLink(win, REMOTE_SRC+'/assets/js/deps.js', function(){
                                        loadLink(win, REMOTE_SRC+'/src/' + win.loader_path + '/loader.js', function() {
                                            async.eathSeries(SCRIPTS, function(src, callback){
                                                loadScript(win, BASE_URL+src, callback);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
}