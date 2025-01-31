import React from 'react'
import { 
    HeaderLogo,
    HeaderNavItem, 
    HeaderNavList, 
    HeaderContentWrapper, 
    HeaderWrapper } from './index.style'
import { NAV } from './consts'

export const Header = () => {
  return (
    <HeaderWrapper>
            <HeaderContentWrapper>
                <HeaderLogo>Hola Fashion</HeaderLogo>
                <nav>
                    <HeaderNavList>
                    {
                        NAV.map(({href, content}) => (
                            <HeaderNavItem key={content}>
                                <a href={href}>{content}</a>
                            </HeaderNavItem>
                        ))
                    }
                    </HeaderNavList>
                </nav>
            </HeaderContentWrapper>
        </HeaderWrapper>
  )
}
