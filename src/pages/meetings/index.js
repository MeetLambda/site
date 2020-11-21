import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Body from "../../components/body"
import { containingFolder } from ".."
import { parseISO, compareDesc } from "date-fns"

const MeetingsPage = () => {
    const meetings = useStaticQuery(graphql`
        {
            allMarkdownRemark {
                nodes {
                    html
                    fileAbsolutePath
                    frontmatter {
                        date
                        code
                        location
                    }
                }
            }
        }
    `)['allMarkdownRemark']['nodes']
        .filter(a => containingFolder(a['fileAbsolutePath']) === "meetings")
        .sort((a, b) => compareDesc( parseISO(a['frontmatter']['date']), parseISO(b['frontmatter']['date'])))
    ;

    function handleEventClick (args) {
        // console.log("HANDLE CLICK =>", args['event']['_def']);
        scrollToHash(args['event']['_def']['title']);
    }

    function scrollToHash (hash) {
        window.location.hash = "#" + hash;
    }

    function goToTop () {
        window.location.hash = "";
        window.scroll(0,0);
    }

    return (
        <Body>
            <a href="..">back</a>
            <h1>MEETINGS</h1>

            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                weekends={true}
                events={ meetings.map(m => { return {title:m['frontmatter']['code'], date:parseISO(m['frontmatter']['date'])}; }) }
                eventClick={ handleEventClick }
            />

            <ol>{ meetings.map((i, k) =>
                <li key={ k } id={ i['frontmatter']['code'] }>
                    <a onClick={ goToTop }>#</a> { i['frontmatter']['code'] }
                    <article dangerouslySetInnerHTML={ {__html: i['html']} } />
                </li>
            )}</ol>
        </Body>
    )
}

export default MeetingsPage


