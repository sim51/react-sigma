import React, { FC } from 'react';

import { GraphSearchInput, GraphSearchInputProps } from './GraphSearchInput';
import { GraphSearchContextProvider, GraphSearchContextProviderProps } from './context';

/**
 * Component that display the search.
 * It is the main component of this package, you can only use this one.
 *
 * @category Component
 */
export const GraphSearch: FC<GraphSearchInputProps & GraphSearchContextProviderProps> = ({
  minisearchOptions,
  ...props
}) => (
  <GraphSearchContextProvider minisearchOptions={minisearchOptions}>
    <GraphSearchInput {...props} />
  </GraphSearchContextProvider>
);
