import Head from "next/head";
import React, { type FC, type ReactNode } from "react";

interface PageHelmetProps {
  title?: string;
  children?: ReactNode;
}

const PageHelmet: FC<PageHelmetProps> = ({ title = "", children }) => {
  return (
    <Head>
      <title>Boston Branding & Creative Design Studio | Karm Labs {title ? `| ${title}` : ""}</title>
      <meta name="description" content="Karm Creative Labs is a Boston-based branding, design, and digital services studio helping From Bold Startups To Global enterprises with identity, modern websites, and creative strategy." />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
};

export default PageHelmet;
