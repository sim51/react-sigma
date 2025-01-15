import DemoGraphSource from '!!raw-loader!../../../storybook/stories/Demo';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '@react-sigma/core/lib/style.css';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import CodePreview from '../components/CodePreview';
import HomepageFeatures from '../components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={useBaseUrl('/img/logo-white.svg')} alt="React Sigma logo" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/start-introduction">
            Getting started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <CodePreview
                mode="preview"
                title="Example of what you can do with react, sigma & graphology"
                code={DemoGraphSource}
                component={() => {
                  // eslint-disable-next-line
                  const Demo = require('../../../storybook/stories/Demo').Demo;
                  return <Demo style={{ height: '400px' }} />;
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
