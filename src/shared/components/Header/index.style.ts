import styled from "styled-components";


export const HeaderWrapper = styled.header`
    padding: .1px 0px;
    background-color: white;
    border-radius:100px 100px 100px 100px ;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5)
`

export const HeaderLogo = styled.a`
    color: #91916C;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const HeaderContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 39px 70px;
`


export const HeaderNavList = styled.ul`
    display: flex;
    gap: 76px;
`


export const HeaderNavItem = styled.li`
    color: #000;
    font-family: var(--font-primary);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`