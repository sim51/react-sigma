import { SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import type Graph from 'graphology';
import { CSSProperties, FC, useEffect, useState } from 'react';

import { useRandom } from './common/useRandom';

export const Lifecycle: FC<{ style?: CSSProperties }> = ({ style }) => {
  const { randomGraph } = useRandom();
  const [graph, setGraph] = useState<null | Graph>(randomGraph());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGraph(null);
      setTimeout(() => setGraph(randomGraph), 500);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [randomGraph]);

  return (
    <>{graph ? <SigmaContainer style={style} graph={graph} settings={{ allowInvalidContainer: true }} /> : null}</>
  );
};
