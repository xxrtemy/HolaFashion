import styled from "styled-components";

export const Wrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 76px;
    grid-column-gap: 55px;
`
export const ListItemWrapper =  styled.li`
    display: flex;
    flex-direction: row; 
    gap: 32px;
    align-items: center;
`
export const ListItemImg =  styled.img<{
width?: string; 
height?: string;
}>`
    max-width: ${({width}) => width ? `${width}` : "100%"};
    height: ${({height}) => height ? `${height}` : "auto"};
`
export const ListItemText = styled.p`
    color: #333;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 171.5%; /* 34.3px */
    letter-spacing: 0.4px;
    white-space: normal;
`