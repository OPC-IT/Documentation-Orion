---
sidebar_order: 1
# title: Website Monitoring Setup (drupal 7^)
slug: /security-center/setting/website-setup-drupal7
---





# Website Monitoring Setup (drupal 7^)



The reason for segregating a different tutorial for setting up Orion Module for "`drupal 7`" site is because it uses old & potentially deprecated modules, and is often non-composer managed, for that matter, we will manually download the extension's file and put that in the `/public_html/modules/custom` and the remainder of the installation process will be the exact same as that of the  "`drupal 8/9/10`" site.



:::info

Except for "Installing Dependency Module", the remainder steps "Configuring the Extension / Orion Setting" and "Exporting Configuration" will be identical to  "drupal 8/9/10" site.

:::



### Installing Dependency Module

As aforementioned, for drupal 7 and non-composer managed site, you will need to manually download the files. To do that you will need to proceed to the website for the "Vital" and "Health Check" module, and look for the most compatible version. For drupal 7 site, they are most likely to be listed at the bottom of the page, and is often marked to have vulnarbilities due to their deprecation.

-   [Drupal Custom Module - Vital](https://www.drupal.org/project/vitals)
-    [Drupal Custom Module - Health Check](https://www.drupal.org/project/health_check)

![2023.06.08 - 16_11_01 -  [Google Chrome-Vitals  Drupal.org] -](assets/2023.06.08%20-%2016_11_01%20-%20%20%5BGoogle%20Chrome-Vitals%20%20Drupal.org%5D%20-.jpg)

Then, proceed to CPanel, paste and extract the downloaded two files for "vital" and "health checker" moduels at location `/public_html/modules/contrib`.

![2023.06.08 - 16_14_53 -  [Google Chrome-cPanel - Tools] -](assets/2023.06.08%20-%2016_14_53%20-%20%20%5BGoogle%20Chrome-cPanel%20-%20Tools%5D%20-.jpg)



Thirdly, to enable the module in the drupal backend, you will need to proceed to the website's extend tab, like the following shown:

![2023.06.08 - 15_19_24 -  [Google Chrome-Extend  OPC] -](assets/2023.06.08%20-%2015_19_24%20-%20%20%5BGoogle%20Chrome-Extend%20%20OPC%5D%20-.jpg)

Lastly, in CPanel again, you will need to ensure that your `/public_html/.htaccess` contains the two lines (anywhere in the file), then make a full cache clearing via the backend.

```
...
CacheDisable public /
CacheDisable private /
...
```

![2023.06.08 - 15_20_58 -  [Google Chrome-cPanel - Tools] -](assets/2023.06.08%20-%2015_20_58%20-%20%20%5BGoogle%20Chrome-cPanel%20-%20Tools%5D%20-.jpg)

![2023.06.08 - 15_24_43 -  [Google Chrome-Extend  OPC] -](assets/2023.06.08%20-%2015_24_43%20-%20%20%5BGoogle%20Chrome-Extend%20%20OPC%5D%20-.jpg)



---



### Configuring the Extension / Orion Setting

The previous steps will install the required module for the targeted website, in this section we will go through retriving the authentication token from the website, and configure the Orion Monitor. After configuration Orion Monitor will be able to access the website health status, php version, and out-dated modules via that token.

First, you will copy the authentication token from the "vital configuration" panel, for instance the site you want to monitor is "www.example.com" then you login the drupal backend via "www.example.com/user" and then visit "www.example.com/admin/config/services/vitals".



![2023.06.08 - 15_30_19 -  [Google Chrome-Extend  OPC] -](assets/2023.06.08%20-%2015_30_19%20-%20%20%5BGoogle%20Chrome-Extend%20%20OPC%5D%20-.jpg)

Second, you will need to configure the Orion Monitor, entering the website's name, Url, and the token we just copied, noting that the Url and token is crucial configuration, they has to be exact match with the target website.

![2023.06.08 - 15_39_54 -  [CleanShot-CleanShot] -](assets/2023.06.08%20-%2015_39_54%20-%20%20%5BCleanShot-CleanShot%5D%20-.png)

Lastly check to see your site monitoring on active by visiting "[https://opc.com.au/orion/security](https://opc.com.au/orion/security)", you should be able to see an addition entry of your site active, and the timestamp refreshing, if the timestamp is not refresh, there is a issue connecting to the target site.

![2023.06.08 - 15_45_28 -  [Google Chrome-Installation (drupal 8910^)  Orion] -](assets/2023.06.08%20-%2015_45_28%20-%20%20%5BGoogle%20Chrome-Installation%20(drupal%208910%5E)%20%20Orion%5D%20-.jpg)



---



### Exporting Configuration "orion.settings.yml"

The previous step of "changing orion setting" will make a modifification to the "configuration" of drupal site where the Orion Monitor is sitting on (aka the "[opc.com.au](opc.com.au)" site), consequently, there will be a mismatch between the producation filebase and the development firebase. More specifically, the file `config/sync/orion.settings.yml` will be different on `main`, `stage`, and `production` branch, and if nothing is done, then at the next feature change, the new changes to this file will be overriden by old version.

:::info

To avoid that we will need to synchronize the changes to that `config/sync/orion.settings.yml` file to all the branches we have.

:::

First, copy the changes we just made via the drupal backend

![image-20230608155431910](assets/image-20230608155431910.png)

Then paste the changes to your `main` branch, and perform branch merging like you would usually do in development, aka, merging `main` to `stage`, then merging `stage` to `prod`.

![2023.06.08 - 15_56_52 -  [Google Chrome-OPC eBusiness  OPC Website · GitLab] -](assets/2023.06.08%20-%2015_56_52%20-%20%20%5BGoogle%20Chrome-OPC%20eBusiness%20%20OPC%20Website%20%C2%B7%20GitLab%5D%20-.jpg)

![2023.06.08 - 16_00_03 -  [Google Chrome-branch merging main stage prod - Google Search] -](assets/2023.06.08%20-%2016_00_03%20-%20%20%5BGoogle%20Chrome-branch%20merging%20main%20stage%20prod%20-%20Google%20Search%5D%20-.jpg)





























