import Head from "next/head";
import React, { type FC, type ReactNode } from "react";

interface PageHelmetProps {
  title?: string;
  description?: string
  children?: ReactNode;
}

const PageHelmet: FC<PageHelmetProps> = ({
  title = "",
  description = "Karm Creative Labs is a Boston-based branding, design, and digital services studio helping From Bold Startups To Global enterprises with identity, modern websites, and creative strategy.",
  children }) => {
  return (
    <Head>
      <title>Boston Branding & Creative Design Studio | Karm Labs {title ? `| ${title}` : ""}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
};

export default PageHelmet;
