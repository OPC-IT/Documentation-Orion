---
title: "Deploy - Github Pages"
---



# Github Pages

In order to deploy the docusaurus reposiroty onto a Github Pages that is accessible by anyone on the internet, you will need to perform the following steps in order.

1. Turn on Github Pages in setting

![2023.06.08 - 13_56_37 -  [Google Chrome-Pages] -](assets/2023.06.08%20-%2013_56_37%20-%20%20%5BGoogle%20Chrome-Pages%5D%20-.jpg)

2.   Changing the field `url` and `baseUrl`following in `docusaurus.config.js`

     ![2023.06.08 - 13_59_03 -  [Code-█ ฅ^•ﻌ•^ฅ █ █ がんばれ! █] -](assets/3213213.jpg)

3.   Adding Github Workflow / Action

     ```
     name: 
     	Deploy to Github Pages
     on:
         push:
             branches: ["main", "gh-pages"]
     permissions:
         contents: read
         pages: write
         id-token: write
     jobs:
         deploy:
             environment:
                 name: github-pages
                 url: ${{ steps.deployment.outputs.page_url }}
             runs-on: ubuntu-latest
             steps:
                 - name: Checkout
                   uses: actions/checkout@v3
                 # 👇 Build steps
                 - name: Set up Node.js
                   uses: actions/setup-node@v3
                   with:
                       node-version: 18.x
                       cache: npm
                 - name: Install dependencies
                   run: npm clean-install
                 - name: Build
                   run: npm run build
                 # 👆 Build steps
                 - name: Setup Pages
                   uses: actions/configure-pages@v1
                 - name: Upload artifact
                   uses: actions/upload-pages-artifact@v1
                   with:
                       # 👇 Specify build output path
                       path: build
                 - name: Deploy to GitHub Pages
                   id: deployment
                   uses: actions/deploy-pages@v1
     
     ```

4.   Trigger the GitHub Action we just created

![2023.06.08 - 14_01_08 -  [Google Chrome-Actions · SuoweiHuOPC-Orion-Documentation] -](assets/2023.06.08%20-%2014_01_08%20-%20%20%5BGoogle%20Chrome-Actions%20%C2%B7%20SuoweiHuOPC-Orion-Documentation%5D%20-.jpg)



Wait for the above compilation finish, and then you could proceed to `https://<organisation_name>.github.io/<project_name>` to see your document live !
