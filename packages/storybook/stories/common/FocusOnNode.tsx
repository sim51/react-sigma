import { useCamera, useSigma } from '@react-sigma/core';
import { FC, useEffect } from 'react';

export const FocusOnNode: FC<{ node: string | null; move?: boolean }> = ({ node, move }) => {
  // Get sigma
  const sigma = useSigma();
  // Get camera hook
  const { gotoNode } = useCamera();

  /**
   * When the selected item changes, highlighted the node and center the camera on it.
   */
  useEffect(() => {
    if (!node) return;
    sigma.getGraph().setNodeAttribute(node, 'highlighted', true);
    if (move) gotoNode(node);

    return () => {
      sigma.getGraph().setNodeAttribute(node, 'highlighted', false);
    };
  }, [node, move, sigma, gotoNode]);

  return null;
};
