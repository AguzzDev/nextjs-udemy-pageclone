import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import Image from 'next/image'

import { Icon } from './HeaderIcon'
import AvatarHeader from './Avatar'
import DropdownSmallScreen from './DropdownSmallScreen'
import { PopoverIcons, PopoverUdemyButton, PopoverNavButton, PopoverAprendizaje, PopoverEnsena } from './Popovers'

export default function Header() {
  return (
    <header className='w-full sticky z-50'>
      <section className='flex px-6 py-2 border-b border-gray-300'>
        {/* Left */}
        <div className='items-center hidden pl-1 mr-5 cursor-pointer md:flex'>
          <a href='/'>
            <Image src='/logo-udemy.svg' height={50} width={91} />
          </a>
        </div>
        <DropdownSmallScreen />
        {/* Center */}
        <div className='flex flex-grow md:space-x-4 lg:space-x-3 xl:space-x-6'>
          <div className='flex items-center justify-center flex-grow md:hidden'>
            <a href='/'>
              <Image src='/logo-udemy.svg' height={30} width={91} />
            </a>
          </div>
          <div className='items-center hidden md:flex'>
            <h1 className='text-sm font-normal text-gray-600 cursor-pointer tracking-thin whitespace-nowrap hover:text-blue-400'>Categorías</h1>
          </div>
          <div className='md:flex items-center hidden w-full'>
            <div className='border border-gray-400 rounded-full md:flex w-full h-12 items-center'>
              <span className='pl-3'><Icon Icon={SearchIcon} /></span>
              <input type='search' className='w-full pl-2 mr-2 focus:outline-none' placeholder=' Buscar cualquier cosa' />
            </div>
          </div>

          <PopoverUdemyButton />
          <PopoverEnsena />
          <PopoverAprendizaje />
        </div>
        {/* Right */}
        <div className='flex md:space-x-3 lg:space-x-2 xl:space-x-3 md:ml-5'>
          <div className='flex items-center space-x-2'>
            <div className='cursor-pointer sm:flex md:hidden'>
              <Icon Icon={SearchIcon} />
            </div>
            <div className='cursor-pointer sm:flex md:hidden'>
              <Icon Icon={ShoppingCartIcon} />
            </div>
          </div>

          <PopoverIcons />

          <div className='items-center hidden rounded-full cursor-pointer md:flex'>
            <AvatarHeader />
          </div>
        </div>
      </section>

      <section className='items-center justify-center hidden w-full py-3 space-x-5 shadow-xl md:flex'>
        <PopoverNavButton />
      </section>

    </header>
  )
}
