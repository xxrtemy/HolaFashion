export interface UnorderedProps {
    content: Array<ListItem>
}

type ListItem = {
    text: string;
    sizeImg?: Size;
    img: string
    index: number
}
type Size = {
    width?: string; 
    height?: string
}