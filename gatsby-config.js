module.exports = {
	siteMetadata: {
		title: `Meetlambda`,
		description: `…`,
		author: `Meetlambda`,
	},
	pathPrefix: `/`,
	plugins: [
		{
			resolve: `gatsby-plugin-react-helmet`,
		},
		{
			resolve: `gatsby-transformer-sharp`,
		},
		{
			resolve: `gatsby-plugin-sharp`,
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/content/`,
				ignore: [`**/\.*`], // ignore files starting with a dot
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
		},
	],
}
