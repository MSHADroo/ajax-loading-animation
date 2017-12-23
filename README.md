# ajax-loading-animation
a simple ajax loading animation for jquery
[Demo](http://toplan.github.io/loading/)
# Simple Usage

must include jQuery file and ajax-loading files

```html
<link href="/path/to/ajax-loading.min.css">
<script src="/path/to/ajax-loading.min.js"></script>
<script type="text/javascript">
  //init: automatic monitoring ajax events
  var loading = new loading({});

  //enable and disable listening ajax events
  loading.ajax(true);//enable
  loading.ajax(false);//disable

  //manual show the loading view
  loading.open();//not close
  loading.open(1000);//auto close view after 1 seconds

  //manual close the loading view
  loading.close();

</script>
```

# More

```html
<script type="text/javascript">
   //init
   $.loading({
        ajax       : true,  //true or false to enable or disable loading spinner based on jQuery ajax events

        //wrap div
        id         : 'ajaxLoading',
        zIndex     : '1000',
        background : 'rgba(0, 0, 0, 0.7)',  //set the background color of loading spinner wrapper
        minTime    : 200,   //minimum time to show of ajax loading spinner

        //loading wrapper
        radius     : '4px', //border radius of ajax animation wrapper
        width      : '170px', //width of ajax animation wrapper than can be set to 100%
        height     : '170px', //height of ajax animation wrapper than can be set to 100%

        //loading img/gif/css
        type       : 'circle', //type of animation than can be set to box, line, circle, wave, bar, switch, bouncy, image
        imgPath    : '/assets/img/img.gif', //set when the type is image to address the image url
        imgWidth   : '80px',    //width of ajax animation spinner
        imgHeight  : '80px',    //height of ajax animation spinner

        //loading text
        tip        : 'loading...',  //the text that shown under the spinner
        fontSize   : '14px',    //the size of text
        fontColor  : '#fff'     //the color of text
   });
</script>
```
