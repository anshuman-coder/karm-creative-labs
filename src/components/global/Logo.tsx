import clsx from 'clsx'
import Image from 'next/image'
import React, { type FC } from 'react'

interface LogoProps {
  className?: string
}
const Logo: FC<LogoProps> = ({ className = '' }) => {
  return (
    <Image
      src="/karn-logo.png"
      alt='karn-logo'
      width={89}
      height={35}
      className={clsx(className)}
    />
  )
}

export default Logo