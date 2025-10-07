import Head from 'next/head'
import React, { type FC, type ReactNode } from 'react'

interface PageHelmetProps {
  title: string
  children?: ReactNode
}

const PageHelmet: FC<PageHelmetProps> = ({ title = '', children }) => {
  return (
    <Head>
      <title>Karn creative labs: {`${title}`}</title>
      {children}
    </Head>
  )
}

export default PageHelmet