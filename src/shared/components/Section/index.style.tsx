import styled from "styled-components";

export const SectionWrapper = styled.section<{color: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({color}) => color};
    padding-bottom: 40px;
`

export const SectionHeading = styled.h1<{color: string}>`
    margin: 76px 0px 96px 0px;
    color: ${({color}) => color};
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 139%; /* 44.48px */
    letter-spacing: 0.96px;
`

export const SectionTitle = styled.h2<{color: string}>`
    margin-bottom: 85px;
    color: ${({color}) => color};
    text-align: center;
    font-family: var(--font-titles);
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 139%; /* 66.72px */
    letter-spacing: 0.96px;
`

export const SectionCards = styled.div`
    margin: 0px 95px 80px 95px;
`
