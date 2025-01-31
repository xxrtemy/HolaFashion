import React, { FC } from 'react'
import { SectionProps } from './index.interface'
import { 
  SectionHeading, 
  SectionTitle,
  SectionWrapper,
  SectionCards 
} from './index.style'

export const Section: FC<SectionProps> = ({ heading, title, children, colors }) => {
  return (
    <SectionWrapper color={colors.background} id='Blog'>
      <SectionHeading color={colors.heading}>
        {heading}
      </SectionHeading>
      <SectionTitle color={colors.title}>
        {title}
      </SectionTitle>
      <SectionCards>
        {children}
      </SectionCards>
    </SectionWrapper>
  )
}
