export interface UnorderedProps {
    listItems: Array<ListItem>
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