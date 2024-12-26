import React, { FC, ReactNode } from 'react'
import { Unordered } from './Unordered';

const ComposableList: FC<{ children: ReactNode }> = ({ children }) => {
    return <div>{children}</div>;
  };

export const List = Object.assign(ComposableList, {
    Unordered: Unordered,
    // Secondary: SecondaryButton,
  });