import React from 'react'

import { List } from '@components/List'
import { Section } from '@components/Section'

import { BLOG } from './consts'

function Blog(){
    return(
        <Section {...BLOG.SECTION}>
            <List.Unordered {...BLOG.LIST} />
        </Section>
    )
}

export default Blog;