declare module '*.svg' {
  import type { FunctionComponent, SVGProps } from "react";

  const src: string

  export const ReactComponent: FunctionComponent<SVGProps<SVGAElement> & { title?: string}>

    export default src;
  }