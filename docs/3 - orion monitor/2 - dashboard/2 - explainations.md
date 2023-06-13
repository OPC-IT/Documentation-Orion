---
sidebar_position: 2
slug: "/orion-monitor/dashboard/explaination"
title: "Explaination"
---


# Explaination



The **"Orion Dashboard"** (also known as "ConnectWise Dashboard" or "ConnectWise Module") serves the fundamental purpose of give a holistic view for the website client, and give then information regards to the company details in the record, a histogram of the hours they have been spending in the the past month, and a list of ticket they opened recently. 



:::info 



For **performance reasons**, we can only display a limited amount of entries on the histogram and ticket, the threshold is around 14 days, if you go over this the site may be extremely slow to load; Or in the worst condition, even timeout and raise a failure. 



:::



The "**Orion Dashboard**" module is a one page module, and can be divided into three components:

-   **Company Overview**, which allows client to inspect the address, contact, etc they propogate on our connectwise database. Bringing ease for confirmation of informations. 

-   **Time-Spenditure Histogram**, which allows client to inspect their spending in the **past two weeks**, a client can choose the time range by clicking on the calendar icon (the other from/to time will update accordingly)
-   **Ticket List**: which allows client to view a list of ticket they opened with the "web support" team of the company "OPC.IT" (opc6005)



 

![2023.06.13 - 10_04_47 -  [Google Chrome-CW Module - Dashboard  OPC] -](assets/2023.06.13%20-%2010_04_47%20-%20%20%5BGoogle%20Chrome-CW%20Module%20-%20Dashboard%20%20OPC%5D%20-.jpg)





















## Code/Module Explaination

The "Orion Dashboard" (also known as "ConnectWise Dashboard" or "ConnectWise Module") is made up of two sub-modules: `ConnectWise Manage - Page`, `ConnectWise Manage - Api`, in the upcoming few paragraph, we will exaplin in details the purpose and entry-point (controller) of these modules, as well as file hierachies for you to reference in the future.

:::warning 



The "field_company_id" is key for the module to function properly, make sure you have set it up as explained earlier. 



If a user does not have this field configured, it will keep loading.



:::



### connectwise-manage-page

This module will add a new page `https://<site_base_url>/orion` to the existing site. It does not provide other feature such as api or logic handling, except for one (page) controller that will retern a page whenever the user access the url.

The way it does that is however not like a typical drupal site, it does not use the twig file as the template nad filling it with php variables; but rather it first create an empty node, then use JavaScript to replace that empty node with a content-filled node, the content-filled note is created with combination of React and Material-UI, the source code for these JavaScript file can be found at `\src\Javascript\SourceCode\src\index.js` .

![2023.06.08 - 11_43_30 -  [CleanShot-CleanShot] -](assets/2023.06.08%20-%2011_43_30%20-%20%20%5BCleanShot-CleanShot%5D%20-.png)

![2023.06.08 - 11_48_50 -  [CleanShot-CleanShot] -](assets/2023.06.08%20-%2011_48_50%20-%20%20%5BCleanShot-CleanShot%5D%20-.png)

### connectwise-manage-api

This module act like the api end-point for the "**page**" module; In a way that it proxies some of the reuqest to connectwise offical API, adding headers, authentication method, and required data type before requesting, and encapsulating some of the lower level logic to hide the undesired logic from the page module.

![2023.06.13 - 09_38_05 -  [Google Chrome-Explaination  Orion] -](assets/2023.06.13%20-%2009_38_05%20-%20%20%5BGoogle%20Chrome-Explaination%20%20Orion%5D%20-.jpg)

:::danger Take care

Make sure you update the corresponding page (Drupal custom module: ConnectWise-Module-Page) when you change these endpoints

:::

More details with regards to the API will be disucessed in the "API Endpoint" section
