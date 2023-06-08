---
sidebar_position: 2
title: "Explaination"
---


# Explaination

The Orion Dashboard (also known as "ConnectWise Dashboard" or "ConnectWise Module") is made up of two sub-modules: `ConnectWise Manage - Page`, `ConnectWise Manage - Api`, in the upcoming few paragraph, we will exaplin in details the purpose and entry-point (controller) of these modules, as well as file hierachies for you to reference in the future.


## Module: connectwise-manage-page

This module will add a new page `https://<site_base_url>/orion` to the existing site. It does not provide other feature such as api or logic handling, except for one (page) controller that will retern a page whenever the user access the url.

The way it does that is however not like a typical drupal site, it does not use the twig file as the template nad filling it with php variables; but rather it first create an empty node, then use JavaScript to replace that empty node with a content-filled node, the content-filled note is created with combination of React and Material-UI, the source code for these JavaScript file can be found at `\src\Javascript\SourceCode\src\index.js` .

![2023.06.08 - 11_43_30 -  [CleanShot-CleanShot] -](assets/2023.06.08%20-%2011_43_30%20-%20%20%5BCleanShot-CleanShot%5D%20-.png)

![2023.06.08 - 11_48_50 -  [CleanShot-CleanShot] -](assets/2023.06.08%20-%2011_48_50%20-%20%20%5BCleanShot-CleanShot%5D%20-.png)



## Module: connectwise-manage-api

This module act like the api end-point for the "**page**" module; In a way that it proxies some of the reuqest to connectwise offical API, adding headers, authentication method, and required data type before requesting, and encapsulating some of the lower level logic to hide the undesired logic from the page module.

:::danger Take care

Make sure you update the corresponding page (Drupal custom module: ConnectWise-Module-Page) when you change these endpoints

:::

More details with regards to the API will be disucessed in the "API Endpoint" section
