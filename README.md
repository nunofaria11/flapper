# flapper
A take on the tutorial at [thinkster (flapper-news)](https://thinkster.io/mean-stack-tutorial/) using [bower](bower.io), [AngularJS](https://angularjs.org/) and [Bootstrap](http://getbootstrap.com/).

Instead of using the `ui-router` library (suggested by the author of the tutorial), this project is using the native AngularJS routing mechanisms (in order to be able to divide templates in its own independent `html` file).

The [http-server](https://www.npmjs.com/package/http-server) package was installed to address the [Google Chrome and 'cross origin request' issue](http://stackoverflow.com/a/27743373/691916).