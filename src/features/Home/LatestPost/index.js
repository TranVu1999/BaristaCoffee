import React from 'react'
import Title from './../../../commons/components/Title'

function LatestPost({listLatestPost}) {
    return (
        <section className="cf-container mb-100">
            <Title 
                smallTitle = "What Happens Here" 
                mainTitle = "Read Our Latest News"
            />

            {listLatestPost}
        </section>
    )
}

export default LatestPost
