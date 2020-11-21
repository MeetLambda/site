module.exports = {
	siteMetadata: {
		title: `Meetlambda`,
		description: `…`,
		author: `Meetlambda`,
	},
	pathPrefix: `/`,
	plugins: [
		{
			resolve: `gatsby-transformer-remark`,
		},
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
				name: `markdown-pages`,
				path: `${__dirname}/content/`,
				ignore: [`**/\.*`], // ignore files starting with a dot
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
		},
	],
}
