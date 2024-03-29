import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import CodePreview from "@site/src/components/CodePreview";
import DemoGraph from "../components/DemoGraph";
import DemoGraphSource from "!!raw-loader!../components/DemoGraph";
import "@react-sigma/core/lib/react-sigma.min.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img src={useBaseUrl("/img/logo-white.svg")} alt="React Sigma logo" />
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
                code={DemoGraphSource}
                title="Example of what you can do with react, sigma & graphology"
              >
                <DemoGraph />
              </CodePreview>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
