class adBlockDetector {
    constructor(params) { 
        this.timeout = params.timeout || 1000
        this.pixels = params.pixels || [
            "https://www.facebook.com/tr?ad_slot=0&&ad_height=0&w=-ad-336x280-",
            "https://ad.doubleclick.net/pagead/viewthroughconversion/pixel_id/"
        ];
    }
    createAdBlockHoneypot(params){
        var timeout = new Promise(resolve => {
            setTimeout(() => {
                resolve({status: false})
            }, params.timeout);
        });
        
        var img = new Image();
    
        var honeypot = new Promise(resolve => {
            img.height = 2;
            img.width = 2;
            img.loading = "eager";
            img.onload = () => { resolve(false); }
            img.onerror = () => { resolve(true); }
            img.onabort = () => { resolve(true); }
            img.src = params.url;
            document.body.appendChild(img);
        });
    
        return Promise.race([honeypot, timeout]).then(result => {
            img.remove();
            return result;
        })
    }
    runTests(){
        var testPromises = this.pixels.map(url => {
            return {
                url,
                timeout: this.timeout
            }
        }).map(this.createAdBlockHoneypot)
    
        return Promise.all(testPromises)
        .then(results => {
            return results.some(Boolean)
            
        })
    }

}

