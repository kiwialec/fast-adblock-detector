function detectAdBlocker(timeout){
    var racer = new Promise(function (resolve, reject){
        setTimeout(reject, timeout);
    });
    
    var honeypot = new Promise(function (resolve){
        var honeyUrl = "https://ad.doubleclick.net/pagead/viewthroughconversion/pixel_id/";
        var img = new Image();
        img.height = 2;
        img.width = 2;
        img.loading = "eager";
        img.onload = function(){ resolve(false); }
        img.onerror = function(){ resolve(true); }
        img.onabort = function(){ resolve(true); }
        img.src = honeyUrl;
        document.body.appendChild(img);
    });

    return Promise.race([honeypot, racer])
}