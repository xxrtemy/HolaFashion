import React, { FC } from 'react'
import { ListItemImg, ListItemText, ListItemWrapper, Wrapper } from './index.style'
import type { UnorderedProps } from './index.interface'

export const Unordered : FC<UnorderedProps> = ({ content }) => {
  return (
    <Wrapper>
      {content.map(({index, sizeImg, img, text}) => (
        <ListItemWrapper key={index}>
          <ListItemImg {...sizeImg} src={img} />
          <ListItemText>{text}</ListItemText>
        </ListItemWrapper>
      ))

      }
    </Wrapper>
  )
}


