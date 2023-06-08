---
sidebar_position: 2
title: "Page"
---


## Module: ConnectWise-Manage-Page

```file title="\public_html\modules\custom\ConnectWise_Module_Page"
*
|
|______ConnectWise_Module_Dashboard.info.yml
|
|______ConnectWise_Module_Dashboard.routing.yml
|
|______ConnectWise_Module_Dashboard.libraries.yml
|
|______\src
        |
        |_______\Controller
        |
        |_______\JavaScript
                        |_______SourceCode
                                    |_______dist
                                    |_______src
```

For the above files/directories:
- `\ConnectWise_Module_Page` :
	- Directory containing the custom module.
- `ConnectWise_Module_Dashboard.info.yml`:
	- The file of which let drupal know of this custom module, the drupal PHP will get the field "machine name", "description", "package", "compatible drupal version"  from this file.
	- [More information. ](https://www.drupal.org/docs/develop/creating-modules/let-drupal-know-about-your-module-with-an-infoyml-file)
- `ConnectWise_Module_Dashboard.routing.yml`:
	- The router of the drupal module, mapping a path like "/page/hello\_world" to some callback of controller say "/Drupal/example/ControllerExample::page\_hello\_world\_controller"; This file also defines the type of output (json/html), the permission, and library to load (e.g. javascript, CSS) for this page.
	- [ More information. ](https://www.drupal.org/docs/develop/creating-modules/create-a-custom-page-using-a-controller)
- `ConnectWise_Module_Dashboard.libraries.yml`:
	- Define library of javascript or CSS, as a reusable asset for the routers
	- [ More information. ](https://www.drupal.org/docs/develop/creating-modules/adding-assets-css-js-to-a-drupal-module-via-librariesyml)
- `\src\Controller`
	- The handler / callback for the router, it is the processing logic of the page; This file takes the parameter from router, adds a header and returns the page body.
	- [ More information. ](https://www.drupal.org/docs/develop/creating-modules/create-a-custom-page-using-a-controller)
-  `\src\Javascript\SourceCode`
	- Where the main logic of the javascript file lives, the component-wise source code (using React, Material-UI) are contained in `\src\Javascript\SourceCode\src`, and its built/compiled and minified version (using NPM RUN BUILD) are in `\src\Javascript\SourceCode\dist`
	- Notice
		- Devs: to test or develop the React source code, you can copy all the content in file `package_development.json` , paste it to `package.json` , and then running  `npm run start`.
		- Prod: to compile and build the source code, you can copy all the content in file `package_production.json` , paste it to `package.json` , and then running  `npm run build`.
		- The reason for this layout of two files is for a minimum effort towards understanding usage of NPM, while also keeping a minimum usage of the dependencies for the production script.


