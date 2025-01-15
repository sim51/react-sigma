import { useSigma } from '@react-sigma/core';
import { useLayoutCirclepack } from '@react-sigma/layout-circlepack';
import { useLayoutCircular } from '@react-sigma/layout-circular';
import { LayoutHook, LayoutWorkerHook, WorkerLayoutControl } from '@react-sigma/layout-core';
import { useLayoutForce, useWorkerLayoutForce } from '@react-sigma/layout-force';
import { useLayoutForceAtlas2, useWorkerLayoutForceAtlas2 } from '@react-sigma/layout-forceatlas2';
import { useLayoutNoverlap, useWorkerLayoutNoverlap } from '@react-sigma/layout-noverlap';
import { useLayoutRandom } from '@react-sigma/layout-random';
import React, { useEffect, useMemo, useState } from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import { animateNodes } from 'sigma/utils';

type LayoutName = 'circular' | 'circlepack' | 'random' | 'noverlaps' | 'forceDirected' | 'forceAtlas';

export const LayoutsControl: React.FC = () => {
  const sigma = useSigma();
  const [layout, setLayout] = useState<LayoutName>('circular');
  const [opened, setOpened] = useState<boolean>(false);
  const layoutCircular = useLayoutCircular();
  const layoutCirclepack = useLayoutCirclepack();
  const layoutRandom = useLayoutRandom();
  const layoutNoverlap = useLayoutNoverlap();
  const layoutForce = useLayoutForce({ maxIterations: 100 });
  const layoutForceAtlas2 = useLayoutForceAtlas2({ iterations: 100 });
  const workerNoverlap = useWorkerLayoutNoverlap();
  const workerForce = useWorkerLayoutForce();
  const workerForceAtlas2 = useWorkerLayoutForceAtlas2();

  const layouts = useMemo(() => {
    return {
      circular: {
        layout: layoutCircular,
      },
      circlepack: {
        layout: layoutCirclepack,
      },
      random: {
        layout: layoutRandom,
      },
      noverlaps: {
        layout: layoutNoverlap,
        worker: workerNoverlap,
      },
      forceDirected: {
        layout: layoutForce,
        worker: workerForce,
      },
      forceAtlas: {
        layout: layoutForceAtlas2,
        worker: workerForceAtlas2,
      },
    } as { [key: string]: { layout: LayoutHook; worker?: LayoutWorkerHook } };
  }, [
    layoutCirclepack,
    layoutCircular,
    layoutForce,
    layoutForceAtlas2,
    layoutNoverlap,
    layoutRandom,
    workerForce,
    workerNoverlap,
    workerForceAtlas2,
  ]);

  useEffect(() => {
    const { positions } = layouts[layout].layout;
    animateNodes(sigma.getGraph(), positions(), { duration: 1000 });
  }, [layout, layouts, sigma]);

  useEffect(() => {
    const close = () => {
      setOpened(false);
    };
    if (opened === true) {
      setTimeout(() => document.addEventListener('click', close), 0);
    }
    return () => document.removeEventListener('click', close);
  }, [opened]);

  return (
    <>
      <div>
        {layouts[layout] && 'worker' in layouts[layout] && <WorkerLayoutControl layout={layouts[layout].worker!} />}
      </div>
      <div>
        <div className="react-sigma-control">
          <button onClick={() => setOpened((e: boolean) => !e)}>
            <FaProjectDiagram />
          </button>
          {opened === true && (
            <ul
              style={{
                position: 'absolute',
                bottom: 0,
                right: '35px',
                backgroundColor: '#e7e9ed',
                margin: 0,
                padding: 0,
                listStyle: 'none',
              }}
            >
              {Object.keys(layouts).map((name) => {
                return (
                  <li key={name}>
                    <button
                      className="btn btn-link"
                      style={{ fontWeight: layout === name ? 'bold' : 'normal', width: '100%' }}
                      onClick={() => {
                        setLayout(name as LayoutName);
                      }}
                    >
                      {name}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
