(function (document, window) {
    // don't remove ## marks, CLI uses them for updating this file
    // #script_begin#
    
    var scripts = [
        
        "source/models/collection.listOfProducts/collection.listOfProducts.js",
        
        "source/models/model.productDetails/model.productDetails.js",
        
        "source/service/service.dataSource/service.dataSource.js",
        
        "source/service/service.localStorage/service.localStorage.js",
        
        "source/views/screen.home/screen.home.js",
        
        "source/views/screen.listOfProducts/screen.listOfProducts.js",
        
        "source/views/screen.login/screen.login.js",
        
        "source/views/screen.productDetails/screen.productDetails.js",
        
        "source/views/screen.shoppingCart/screen.shoppingCart.js",
        
        "source/views/screen.shoppingHistory/screen.shoppingHistory.js",
        
        "source/application/application.js"
    ];
    // #script_end#
    function onEndLoad() {

        var core = window.RAD.core,
            application = window.RAD.application,
            coreOptions = {
                defaultBackstack: false,
                defaultAnimation: 'none',
                animationTimeout: 3000,
                debug: false
            };

        //initialize core by new application object
        core.initialize(application, coreOptions);

        //start
        application.start();
    }

    window.RAD.scriptLoader.loadScripts(scripts, onEndLoad);
}(document, window));