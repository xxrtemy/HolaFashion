import React, { FC } from 'react'
import { SectionProps } from './index.interface'
import { 
  SectionHeading, 
  SectionTitle,
  SectionWrapper,
  SectionCards 
} from './index.style'

export const Section: FC<SectionProps> = ({ heading, title, children }) => {
  return (
    <SectionWrapper id='Blog'>
      <SectionHeading>
        {heading}
      </SectionHeading>
      <SectionTitle>
        {title}
      </SectionTitle>
      <SectionCards>
        {children}
      </SectionCards>
    </SectionWrapper>
  )
}
