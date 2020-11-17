import React from "react"
import Helmet from "react-helmet"

import "../scss/main.scss"

const IndexPage = () => (
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
        <header>
            <nav>
                <ol>
                    <li><h1>home</h1></li>
                    <li><h1>Projects</h1></li>
                    <li><h1>Meetings</h1></li>
                    <li><h1>Contacts</h1></li>
                    <li><h1>Sponsors</h1></li>
                </ol>
            </nav>
        </header>
        <main>
            <section id="home">

            </section>
            <section id="projects">

            </section>
            <section id="meetings">

                <section id="meetingArchive" class="archive">
                    <ul>
                        <li class="meetingEvent">
                            <time datetime="2016-08-09 08:00">Tuesday at 8:00 AM</time>
                            <article class="meetingDescription">

                            </article>
                        </li>
                    </ul>
                </section>
            </section>
            <section id="contacts">

            </section>
            <section id="sponsors">

            </section>
        </main>
    </>
)

export default IndexPage




