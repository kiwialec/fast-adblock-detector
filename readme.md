## Fast AdBlock Detector

This library quickly identifies users who have an adblocker installed on their browser or network (i.e. PiHole). It's relatively light (just 338 bytes minified) and uses no external libraries or dependencies.

## How it works

It works by loading a DoubleClick pixel into the browser and detecting when that pixel fails to load. This is relatively reliable as DoubleClick is pretty much universally blocked by ad blockers.

## Demo

[See a working demo here](https://kiwialec.github.io/fast-adblock-detector/demo.html)

## Usage

Call the function `detectAdBlocker` with the parameter _timeout_. i.e. `detectAdBlocker(3000)`.

Returns `Promise<Boolean>` (true = ad blocker is active) or `Exception`

### Promises 

```
<script type="text/javascript" src="detect.min.js"></script>
<script type="text/javascript">
    detectAdBlocker(3000)
    .then(function(hasAdBlocker){
        console.log({hasAdBlocker})
    })
    .catch(function(error){
        // An error occurred.
        console.log("There was an error")
    })
</script>
```

### Async/await 

```
<script type="text/javascript" src="detect.min.js"></script>
<script type="text/javascript">
    async function init(){
        try{
            var hasAdBlocker = await detectAdBlocker(3000);
            console.log({hasAdBlocker})
        }catch(error){
            console.log("There was an error")
        }
    }
    init();
</script>
```

### Inline
```
<script type="text/javascript">
    var hasAdBlocker = function(o){var z=Promise;return z.race([new z(function(o){var t=new Image;t.height=t.width=2,t.loading="eager",t.onload=function(){o(!1)},t.onerror=t.onabort=function(){o(!0)},t.src="https://ad.doubleclick.net/pagead/viewthroughconversion/pixel_id/",document.body.appendChild(t)}),new z(function(n,e){setTimeout(e,o)})])}(3000)
    .then(function(hasAdBlocker){
        console.log({hasAdBlocker})
    })
    .catch(function(error){
        // An error occurred.
        console.log("There was an error")
    })
</script>
```