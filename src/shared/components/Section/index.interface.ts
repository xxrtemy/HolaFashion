import { PropsWithChildren } from "react"


type SectionColor = {
    background: string;
    heading: string;
    title: string
}

export interface SectionProps extends PropsWithChildren {
    heading: string 
    title: string
    colors: SectionColor  
}