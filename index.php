<?php ?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> 
  <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

<head id="head">
  <meta charset="utf-8">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="style/normalize.css">
  <link rel="stylesheet" href="style/main.css">

  <link rel="stylesheet" href="custom/fa/css/all.min.css">
  <link rel="stylesheet" href="style/bootstrap.min.css">

  <!-- tippy -->
  <link rel="stylesheet" href="style/tippy.css">
  <link rel="stylesheet" href="style/backdrop.css">
  <link rel="stylesheet" href="style/border.css">
  <link rel="stylesheet" href="style/svg-arrow.css">

  <link rel="stylesheet" href="style/video-js.min.css">

  <link rel="stylesheet" href="style/custom.css?ver=<?php echo time(); ?>" />

  <meta name="theme-color" content="#fafafa">
</head>

<body>
  <!--[if IE]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
	<![endif]-->

  <!-- Add your site or application content here -->
  <p>Hello world! This is HTML5 Boilerplate.</p>

  <hr />

  <script async src="script/modernizr-3.8.0.min.js"></script>
  <script src="script/ua-parser.min.js"></script>
  <script>
    function addClass(elements, myClass) {
      // if there are no elements, we're done
      if (!elements) {
        return;
      }

      // if we have a selector, get the chosen elements
      if (typeof(elements) === 'string') {
        elements = document.querySelectorAll(elements);
      }

      // if we have a single DOM element, make it an array to simplify behavior
      else if (elements.tagName) {
        elements = [elements];
      }

      // add class to all chosen elements
      for (var i = 0; i < elements.length; i++) {

        // if class is not already found
        if ((' ' + elements[i].className + ' ').indexOf(' ' + myClass + ' ') < 0) {

          // add class
          elements[i].className += ' ' + myClass;
        }
      }
    }
    var parser = new UAParser()
    var body = document.getElementsByTagName('body')[0]
    var html = document.getElementsByTagName('html')[0]
    addClass(body, parser.getResult().browser.name)
    addClass(body, parser.getResult().browser.name + parser.getResult().browser.major)
    addClass(body, parser.getResult().browser.name + parser.getResult().engine.name)

    var script = document.createElement('script')
    var es6Promise = ''
    var polyfill = ''
    es6Promise = 'script/es6-promise.min.js'
    polyfill = 'script/polyfill.min.js'
    if (
      body.className.indexOf('IE') > 0 ||
      html.className.indexOf('lt-ie') > 0
    ) {
      script.src = es6Promise
      document.body.appendChild(script)
      script.src = polyfill
      document.body.appendChild(script)
    }
  </script>
  <script src="script/jquery.min.js"></script>
  <!--
  <script>
    window.jQuery || document.write('<script src="script/jquery.min.js"><\/scr' + 'ipt>')
  </script>
  -->
  <script src="script/plugins.js"></script>
  <script src="script/main.js"></script>

  <script async src="script/lodash.min.js"></script>
  <script defer src="script/axios.min.js"></script>
  <script async src="custom/fa/js/all.min.js"></script>
  <script src="script/bootstrap.bundle.min.js"></script><!-- popper included -->
    <!-- <script src="js/vendor/popper.min.js"></script> -->
      <script src="script/tippy.umd.min.js"></script><!-- dep: popper -->
  <script async src="script/dayjs.min.js"></script>
  <script src="script/chart.min.js"></script><!-- moment included -->
  <script defer src="script/Chart.RoundedDoughnut.js"></script>
  <script async src="script/crypto-js.js"></script>
  <script src="script/video.min.js"></script>

  <script src="script/js.cookie.js"></script>
  
  <script src="node_modules/underscore/underscore-min.js"></script>
  <script src="node_modules/backbone/backbone-min.js"></script>
  <script src="node_modules/backbone.localstorage/build/backbone.localStorage.min.js"></script>
  <script src="custom.js?ver=<?php echo time(); ?>"></script>
</body>

</html>