import { PropsWithChildren } from "react"

export interface SectionProps extends PropsWithChildren {
    heading: StyleTextProps 
    title: StyleTextProps
    bgColor: string 
}

type StyleTextProps = {
    text: string,
    color: string
}