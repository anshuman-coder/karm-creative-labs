import clsx from 'clsx'
import React, { type FC, type ReactNode } from 'react'

interface MaxHeightWrapperProps {
  children: ReactNode
  className?: string
}
const MaxHeightWrapper: FC<MaxHeightWrapperProps> = ({ children, className = '' }) => {
  return (
    <section className={clsx('w-full flex flex-col min-h-[calc(100vh-82px)] md:min-h-[calc(100vh-149px)] mt-20 sm:mt-36 overflow-y-scroll', className)}>
      {children}
    </section>
  )
}

export default MaxHeightWrapper