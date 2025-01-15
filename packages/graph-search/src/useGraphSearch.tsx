import { useCallback, useContext } from 'react';

import { GraphSearchContext } from './context';
import { GraphSearchOption, ItemType } from './types';

/**
 * Hooks that returns a function to search in the graph index.
 * This hook must be used in a component that is a descendant of `GraphSearchContextProvider`.
 *
 * @category Hook
 */
export function useGraphSearch() {
  const { index } = useContext(GraphSearchContext);

  const search = useCallback(
    async (query: string, type?: ItemType): Promise<GraphSearchOption[]> => {
      const result = index
        .search(query, {
          prefix: true,
          fuzzy: 0.2,
          filter: type ? (result) => result.type === type : undefined,
          boost: {
            label: 2,
          },
        })
        .map((item) => ({ id: item.id, type: item.type }));
      return result;
    },
    [index],
  );

  return { search };
}
