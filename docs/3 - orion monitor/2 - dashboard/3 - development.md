---
sidebar_position: 2
slug: "/orion-monitor/dashboard/develop-deploy"
title: "Development & Deployment"
---

### Development
If you wish to make adjustments to the React javascript, more specifically files living in  `src\Javascript\SourceCode` by running the React on a local dev web server (rather than having to compile the code, run cache clear, and hard refreshing the page every time), you can do that by doing the following:
1. copy content  `package_production.json`
2. paste it to `package.json`
3. `cd` to the level of `src\Javascript\SourceCode`
4. make adjustification to the `index.html`  and `\Component\Dashboard` in `src\Javascript\SourceCode\src`  (make some variables deterministic/hard-coded, rather than retrieving from drupal endpoints)
5. run `npm run start` to start the server
6. open browser `localhost:8080` to preview the effect of code
7. adjustification to code will automatically update the server, you don't have to run `npm` every time

### Deployment
If you wish to deploy the React javascript code to the drupal site, you will need to build it to the `src/Javascript/SourceCode/dist` by running the corresponding build command
1. copy content of `package_development.json`
2. paste it to `package.json`
3. `cd` to the level of `src\Javascript\SourceCode`
4. run `npm run build` to generate the built/minified code
5. run `(ahoy) drush cr` to clear the cache
6. !!! IMPORTANT !!!! Make sure you refresh the browser with a clear cache shortcut:
	- Command + Shift + R (Mac)
	- Ctrl + Shift + R (Win)

:::info Note

The reason for this layout of two files is for a minimum effort towards understanding usage of NPM, while also keeping a minimum usage of the dependencies for the production script.

:::
