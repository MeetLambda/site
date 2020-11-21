import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

import "../scss/main.scss"

const Body = ({ children }) => {

	return (
		<>
            <Helmet
                htmlAttributes={{
                    lang: "en",
                }}
                title="Meetlambda"
                // meta={[
                // 	{ name:		`description`,			content: "metaDescription" },
                // 	{ property:	`og:title`,				content: "title" },
                // 	{ property:	`og:description`,		content: "metaDescription" },
                // 	{ property:	`og:type`,				content: `website` },
                // 	{ name:		`twitter:card`,			content: `summary` },
                // 	{ name:		`twitter:creator`,		content: "site.siteMetadata.author" },
                // 	{ name:		`twitter:title`,		content: "title" },
                // 	{ name:		`twitter:description`,	content: "metaDescription" },
                // ]}
            />
			{children}
		</>
	)
}

Body.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Body
