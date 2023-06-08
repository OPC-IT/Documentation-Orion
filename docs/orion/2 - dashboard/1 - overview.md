---
sidebar_position: 1
description: This file contains the logic flow for a Drupal module, providing a detailed overview of how the module works and how it interacts with the Drupal platform. The logic flow diagram breaks down the module's functionality into a series of steps and illustrates how data flows between these steps.

---

# Installation
The "Orion Dashboard" page is a in nature a **drupal custom module** build plug in, the logic flow of the module is denoted in the "[logic-flow diagram](assets/image-20230608105209780.png)" (link to the draw.io file: [2023.06.06 ConnectWise-Module-Page.drawio](./src/2023.06.06%20ConnectWise-Module-Page.drawio)).

 In order to make the orion dashboard work, you will need to install two module: `ConnectWise Manage - Page`, `ConnectWise Manage - Api`, one acting as the main entry point of user when they access the drupal page, and the other acting as the API to handle the backend logic, retriving the required data (for instance the company's name/contact/address when given id)

You can enable the modules via the drupal admin: `site > administration > extend`, make sure you run `site_url/update.php` and clear the cache throughly before proceeding.

![2023.06.08 - 10_51_26 -  [Google Chrome-Extend  OPC] -](assets/2023.06.08%20-%2010_51_26%20-%20%20%5BGoogle%20Chrome-Extend%20%20OPC%5D%20-.jpg)

Next you will need to setup the user with a required field `comapny_identifier` , this field is required for each user as a identifier for the user's organisation, the dashboard will show accordingly depending on this unique field.

![2023.06.08 - 10_56_49 -  [Google Chrome-CW Module - Dashboard  OPC] -](assets/2023.06.08%20-%2010_56_49%20-%20%20%5BGoogle%20Chrome-CW%20Module%20-%20Dashboard%20%20OPC%5D%20-.jpg)

:::info

See page [Usage - Setting up Orion User](./usage.md) for instrudction of setting up user

:::

Then you may proceed to the URL to view the module taking effect

![2023.06.08 - 10_54_45 -  [Google Chrome-CW Module - Dashboard  OPC] -](assets/2023.06.08%20-%2010_54_45%20-%20%20%5BGoogle%20Chrome-CW%20Module%20-%20Dashboard%20%20OPC%5D%20-.jpg)

