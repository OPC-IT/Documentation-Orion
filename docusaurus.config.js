/** @format */

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const organizationName = "OPC-IT";
const projectName = "Documentation-Orion";

/** @type {import('@docusaurus/types').Config} */
const config = {
	onBrokenLinks: "log",
	title: "Orion",
	tagline: "Dinosaurs are cool",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://" + organizationName + ".github.io",

	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/"  + projectName,
	// baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: organizationName, // Usually your GitHub org/user name.
	projectName: projectName, // Usually your repo name.
	// trailingSlash: false,

	// onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: "/",
					// sidebarCollapsed: false,
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/" +
						organizationName +
						"/" +
						projectName +
						"/tree/main",
				},
				blog: false, // Optional: disable the blog plugin
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/docusaurus-social-card.jpg",
            metadata: [{name: 'keywords', content: 'docs, orion, opc, it, documentation, security, dashboard, setting'}],
			colorMode: {
				defaultMode: "light",
				// disableSwitch: true,
				respectPrefersColorScheme: false,
			},
			docs: {
				sidebar: {
					hideable: true,
				},
			},
			navbar: {
				// title: "Orion Module",
				logo: {
					alt: "My Site Logo",
					src: "img/opc-logo.png",
				},
				items: [
					// {
					// 	type: "docSidebar",
					// 	sidebarId: "tutorialSidebar",
					// 	label: "Tutorial",
					// 	position: "left",
					// },
					// {
					//     to: "/blog",
					//     label: "Blog",
					//     position: "left"
					// },
					//   {
					//     href: 'https://https://opc.com.au/',
					//     label: 'opc.com.au',
					//     position: 'right',
					//   },
				],
			},
			// footer: {
			// 	style: "dark",
			// 	links: [
			// 		{
			// 			title: "Docs",
			// 			items: [
			// 				// {
			// 				// 	label: "Docusaurus Tutorial",
			// 				// 	to: "/docusaurus/intro",
			// 				// },
			// 				{
			// 					label: "Orion - Dashboard",
			// 					to: "/",
			// 				},
			// 				{
			// 					label: "Orion - Security",
			// 					to: "/",
			// 				},
			// 				// {
			// 				// 	label: "Orion - Setting",
			// 				// 	to: "/",
			// 				// },
			// 			],
			// 		},
			// 		{
			// 			title: "Community",
			// 			items: [
			// 				{
			// 					label: "Stack Overflow",
			// 					href: "https://stackoverflow.com/questions/tagged/docusaurus",
			// 				},
			// 				{
			// 					label: "Discord",
			// 					href: "https://discordapp.com/invite/docusaurus",
			// 				},
			// 			],
			// 		},
			// 		{
			// 			title: "More",
			// 			items: [
			// 				{
			// 					label: "GitHub",
			// 					href: "https://github.com/OPC-IT/Documentation-Orion",
			// 				},
			// 			],
			// 		},
			// 	],
			// 	// copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
			// },
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
	plugins: [
		[
			// Local Search plug in: https://github.com/cmfcmf/docusaurus-search-local
			require.resolve("@cmfcmf/docusaurus-search-local"),
			{
				indexDocs: true,
				indexBlog: false,
				language: "en",
			},
		],
	],
};

module.exports = config;
