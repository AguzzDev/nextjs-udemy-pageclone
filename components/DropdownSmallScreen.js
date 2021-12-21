import { MenuIcon, ChevronRightIcon, GlobeAltIcon } from '@heroicons/react/outline'
import { Menu, Transition } from '@headlessui/react'

import { Icon } from './HeaderIcon'

export default function DropdownSmallScreen() {
  return (
    <Menu>
      <Menu.Button className='cursor-pointer sm:flex md:hidden'>
        <Icon Icon={MenuIcon} />
      </Menu.Button>
      <Transition
        enter='transition duration-50 ease-out'
        leave='transition duration-200 ease-out'
      >
        <Menu.Items className='absolute top-0 left-0 z-50 flex flex-col w-2/4 bg-white'>
          <Menu.Item>
            <>
              <div className='flex flex-row items-center py-5 bg-gray-200 cursor-pointer px-7'>
                <div className='w-16 h-16 mr-4'>
                  <img className='object-cover rounded-full' src='https://studiosol-a.akamaihd.net/uploadfile/cifraclub/avatar/1/6/4chqb0yf7cd.jpg' />
                </div>
                <div className='flex flex-col overflow-hidden'>
                  <h1 className='font-bold break-words'>Hola, Nombre</h1>
                  <p className='text-sm text-gray-500'>¡Hola de nuevo!</p>
                </div>
                <div className='flex'>
                  <Icon Icon={ChevronRightIcon} />
                </div>
              </div>

              <div className='flex flex-col text-sm border-b border-gray-200'>
                <button className='buttonNavuser'>Mi aprendizaje</button>
                <button className='buttonNavuser'>Mi cesta </button>
                <button className='buttonNavuser'>Lista de deseos </button>
                <button className='buttonNavuser'>Panel del instructor </button>
              </div>
              <div className='flex flex-col text-sm border-b border-gray-200'>
                <button className='buttonNavuser'>Notificaciones </button>
                <button className='buttonNavuser'>Mensajes </button>
              </div>
              <div className='flex flex-col text-sm border-b border-gray-200'>
                <button className='buttonNavuser'>Configuración de cuenta </button>
                <button className='buttonNavuser'>Métodos de pago</button>
                <button className='buttonNavuser'>Créditos de Udemy </button>
                <button className='buttonNavuser'>Historial de compras </button>
              </div>
              <div className='flex flex-row justify-between text-sm border-b border-gray-200'>
                <button className='buttonNavuser'>Idioma </button>
                <h1 className='flex items-center mr-5 text-sm'>
                  Español
                  <Icon Icon={GlobeAltIcon} />
                </h1>
              </div>
              <div className='flex flex-col text-sm border-b border-gray-200'>
                <button className='buttonNavuser'>Perfil público</button>
                <button className='buttonNavuser'>Editar perfil </button>
              </div>
              <div className='flex flex-col text-sm border-b border-gray-200'>
                <button className='buttonNavuser'>Ayuda </button>
                <button className='buttonNavuser'>Cerrar sesión</button>
              </div>
              <div className='flex flex-col pb-2'>
                <button className='mx-4 my-3'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='font-bold hover:text-blue-500'>Udemy for Bussiness</h1>
                    <svg className='h-6' viewBox='0 0 24 24'><path d='M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z' /></svg>
                  </div>
                  <p className='text-sm text-gray-600'>Lleva el aprendizaje a tu empresa</p>
                </button>
              </div>
            </>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
