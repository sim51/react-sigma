import { useCamera, useSigma } from '@react-sigma/core';
import { FC, useEffect } from 'react';

export const FocusOnNode: FC<{ node: string | null }> = ({ node }) => {
  // Get sigma
  const sigma = useSigma();
  // Get camera hook
  const { gotoNode } = useCamera();

  /**
   * When the selected item changes, highlighted the node and center the camera on it.
   */
  useEffect(() => {
    if (!node) return;
    gotoNode(node);
  }, [node, sigma, gotoNode]);

  return null;
};
