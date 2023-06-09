---
sidebar_order: 1
title: "* Npm Commands"
slug: "/docusaurus/npm-package-manager"
---

### Setup/Command Reference

**Initialize**
Running the below command will generate the scaffold for Docusaurus site building
`npx create-docusaurus@latest <site-name> <template-option> <lang-option>`
where
- `<site-name>` is the site name,
- `<template-option>` is the starting point of your site and is recommended to be `classic`
- `<lang-option>` can be left empty if you are using Javascript, or `--typescript` otherwise
(e.g. `npx create-docusaurus@latest my-website classic`)

---

**Develop**
Running the below command will launch a local development server, serving for the purpose of previewing the changes
`npm run start / yarn run start`
By default, a browser window will open at "http://localhost:3000".

![2023.06.08 - 13_53_00 -  [Code-█ ฅ^•ﻌ•^ฅ █ █ がんばれ! █] -](assets/1.jpg)

---

**Build**
Running the below command will build the website into a directory of static contents and put it on a web server so that it can be viewed.
`npm run build / yarn run build`
and contents will be generated within the /build directory, which can be copied to any static file hosting service like GitHub pages, Vercel or Netlify. And if you wish to run the instance locally you can run `npm run serve / yarn run serve`

![2023.06.08 - 13_53_44 -  [Code-█ ฅ^•ﻌ•^ฅ █ █ がんばれ! █] -](assets/3.jpg)



![2023.06.08 - 13_54_07 -  [Code-█ ฅ^•ﻌ•^ฅ █ █ がんばれ! █] -](assets/123.jpg)

---

**Deployment**
You may use a variety of static file hosting service:

- Github Pages: https://pages.github.com/
- Vercel: https://vercel.com/
- Netlify: https://www.netlify.com/
- Amazon S3: https://aws.amazon.com/s3/

See more relating to this topic at the documentation:
- https://docusaurus.io/docs/deployment

If you are using GitHub pages for hosting, the following command is a convenient way to build the website and push to the `gh-pages` branch.
- Using SSH:`$ USE_SSH=true yarn deploy`
- Not using SSH:`$ GIT_USER=<Your GitHub username> yarn deploy`

