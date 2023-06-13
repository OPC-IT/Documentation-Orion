---
sidebar_order: 3
title: "File Hierachy"
---


```file title="\public_html\modules\custom\orion"
*
|
|______orion.info.yml
|
|______orion.routing.yml
|
|______orion.libraries.yml
|
|______orion.links.menu.yml
|
|______\src
        |
        |_______\Controller
        |
        |_______\SCSS
        |_______\CSS
		|_______\JavaScript
		|
		|_______\Templates
		|
		|_______\Config

```

For the above files/directories:
- `\orion` :
  - Directory containing the custom module.
- `oiron.info.yml`:
  - The file of which let drupal know of this custom module, the drupal PHP will get the field "machine name", "description", "package", "compatible drupal version"  from this file.
  - [More information. ](https://www.drupal.org/docs/develop/creating-modules/let-drupal-know-about-your-module-with-an-infoyml-file)
- `orion.routing.yml`:
  - The router of the drupal module, mapping a path like "/page/hello\_world" to some callback of controller say "/Drupal/example/ControllerExample::page\_hello\_world\_controller"; This file also defines the type of output (json/html), the permission, and library to load (e.g. javascript, CSS) for this page.
  - [ More information. ](https://www.drupal.org/docs/develop/creating-modules/create-a-custom-page-using-a-controller)
- `orion.libraries.yml`:
  - Define library of javascript or CSS, as a reusable asset for the routers.
  - [ More information. ](https://www.drupal.org/docs/develop/creating-modules/adding-assets-css-js-to-a-drupal-module-via-librariesyml)
- `orion.links.menu.yml`
    - Define a menu full of links (links written as relative path to the site).
    - [More information.](https://www.drupal.org/docs/drupal-apis/menu-api/providing-module-defined-menu-links)

- `\src\Controller`
  - The handler / callback for the router, it is the processing logic of the page; This file takes the parameter from router, adds a header and returns the page body.
  - [ More information. ](https://www.drupal.org/docs/develop/creating-modules/create-a-custom-page-using-a-controller)
- `\src\SCSS` & `\src\CSS`
    - Where the custom styling & Javasctipt Code for the orion monitoring lies
    - Noting that you would have to compile the SCSS script into the CSS script before it taking effect (You can do that via the SCSS compiler "Koala")

- `\src\templates`
    - The custom twig template, refer to this article for more information: [Create custom twig templates for custom module](https://www.drupal.org/docs/theming-drupal/twig-in-drupal/create-custom-twig-templates-for-custom-module)


-   `\src\config`
    -   Defines the custom configuration (for this custom module) based on functionality in other modules (node types, views, fields, text formats, etc).
        For example, node module provides a node type configuration, so in your own module you configure a default node type that can be supplied with your module.
    -   [More Information](https://www.drupal.org/docs/develop/creating-modules/defining-and-using-your-own-configuration-in-drupal)

