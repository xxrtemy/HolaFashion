import React, { FC } from 'react'
import { ListItemImg, ListItemText, ListItemWrapper, Wrapper } from './index.style'
import type { UnorderedProps } from './index.interface'

export const Unordered : FC<UnorderedProps> = ({ listItems }) => {
  return (
    <Wrapper>
      {listItems.map((listItem) => (
      <ListItemWrapper key={listItem.index}>
        <ListItemImg {...listItem.sizeImg} src={listItem.img} />
        <ListItemText>{listItem.text}</ListItemText>
      </ListItemWrapper>
      ))

      }
    </Wrapper>
  )
}


