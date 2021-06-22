## Fast AdBlock Detector

This library quickly identifies users who have an adblocker installed on their browser or network (i.e. PiHole). It's relatively light (just 338 bytes minified) and uses no external libraries or dependencies.

## How it works

It works by loading Google and Facebook pixels into the browser and detecting if they fail to load. This is relatively reliable as request interception and network blocking is pretty much consistent across adblockers (as opposed to detecting when/how ad containers get removed or hidden from the DOM).

## Demo

[See a working demo here](https://kiwialec.github.io/fast-adblock-detector/demo.html)

## Usage

Call the function `detectAdBlocker`, i.e. detectAdBlocker({timeout: 3000}).

**Arguments**

- timeout: Number of milliseconds to wait for the pixel to load before returning false (default: 1000)
- pixels: the URLs of pixels to load into the browser. The function will return true if _any_ of these fail to load (so a 404 error will cause false positives).
- - defaults to: ["https://www.facebook.com/tr?ad_slot=0&&ad_height=0&w=-ad-336x280-","https://ad.doubleclick.net/pagead/viewthroughconversion/pixel_id/"]

Returns `Promise<Boolean>`. Returns true when adblock is active; and false when adblocker is not active or there is a timeout/other error

### Promises 

```
<script type="text/javascript" src="detect.min.js"></script>
<script type="text/javascript">
    var detectAdblock = new adBlockDetector({timeout: 3000});
    detectAdblock.runTests()
    .then(function(hasAdBlocker){
        console.log({hasAdBlocker})
    })
</script>
```

### Async/await 

```
<script type="text/javascript" src="detect.min.js"></script>
<script type="text/javascript">
    async function init(){
        var detectAdblock = new adBlockDetector({timeout: 3000});
        var hasAdBlocker = await detectAdblock.runTests();
        console.log({hasAdBlocker})
        
    }
    init();
</script>
```