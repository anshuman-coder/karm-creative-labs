import React, { useState } from 'react'
import Logo from './Logo'
import Button from '~/components/global/Button'
import { Plus } from 'lucide-react' 
import clsx from 'clsx'
import { NavMenuItems } from '~/constants/NavItems'

const Header = () => {

  const [isMenuOpen, setisMenuOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 right-0 w-full bg-white z-50 p-2'>
      <div className={clsx(
        'w-full flex flex-col justify-start items-start transition-all duration-200 ease-in-out',
        isMenuOpen
          ? 'bg-gradient-to-br from-emerald-400 to-green-300 rounded-2xl'
          : 'bg-transparent rounded-2xl'
      )}>
        <div className="w-full flex justify-between items-center px-1.5 py-3 md:px-6 md:py-4">
          <Logo />
          <div className='flex gap-2 justify-center items-center'>
            <Button label="LET'S TALK" />
            <Button
              iconBtn
              icon={<Plus className={clsx('transform transition-all ease-in-out duration-200 w-2 h-2', isMenuOpen ? 'rotate-45' : 'rotate-none')} />}
              onClick={() => setisMenuOpen(prev => !prev)}
            />
          </div>
        </div>
        {/* dropdownMenu with transition */}
        <div
          className={
            clsx(
              'overflow-hidden transition-all duration-300 ease-in-out w-full',
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            )
          }
        >
          <nav className='px-3 pb-4 gap-y-3.5'>
            {NavMenuItems.map((item, index) => (
              <div
                key={item.key}
                className="transform transition-all duration-300 ease-in-out"
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)'
                }}

              >
                <p className='font-rebond text-xl font-semibold leading-9'>{item.label}</p>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header