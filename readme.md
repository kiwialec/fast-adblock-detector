## Fast AdBlock Detector

This library quickly identifies users who have an adblocker installed on their browser or network (i.e. PiHole). It's relatively light (just 358 bytes minified) and uses no external libraries or dependencies.

## How it works

It works by loading a DoubleClick pixel into the browser and detecting when that pixel fails to load. This is relatively reliable as DoubleClick is pretty much universally blocked by ad blockers.

## Usage

### Promises 

```
<script type="text/javascript" src="detect.min.js"></script>
<script type="text/javascript">
    detectAdBlocker(3000)
    .then(function(hasAdBlocker){
        console.log({hasAdBlocker})
    })
    .catch(function(error){
        // An error occurred. Check error.timeout to see if it timed out
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
            console.log(error)
            // An error occurred. Check error.timeout to see if it timed out
        }
    }
    init();
</script>
```