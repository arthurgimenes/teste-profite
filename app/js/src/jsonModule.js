var jsonModule = (function(window, document) {

    function loadJSON(callback) {
        var xobj = new XMLHttpRequest();

        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'https://api.myjson.com/bins/234w0', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    return {
        loadJSON : loadJSON
    }

}(window, document));
