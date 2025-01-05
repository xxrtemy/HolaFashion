import React, { FC } from 'react'
import { SectionProps } from './index.interface'
import { 
  SectionHeading, 
  SectionTitle,
  SectionWrapper,
  SectionCards 
} from './index.style'

export const Section: FC<SectionProps> = ({ heading, title, children, bgColor }) => {
  return (
    <SectionWrapper color={bgColor} id='Blog'>
      <SectionHeading color={heading.color}>
        {heading.text}
      </SectionHeading>
      <SectionTitle color={title.color}>
        {title.text}
      </SectionTitle>
      <SectionCards>
        {children}
      </SectionCards>
    </SectionWrapper>
  )
}
