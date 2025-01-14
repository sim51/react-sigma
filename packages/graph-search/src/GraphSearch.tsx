import React, { FC } from 'react';

import { GraphSearchInput, GraphSearchInputProps } from './GraphSearchInput';
import { GraphSearchContextProvider } from './context';

export const GraphSearch: FC<GraphSearchInputProps> = (props) => (
  <GraphSearchContextProvider>
    <GraphSearchInput {...props} />
  </GraphSearchContextProvider>
);
