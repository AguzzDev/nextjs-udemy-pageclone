import { GlobeAltIcon } from '@heroicons/react/solid'
import { Popover } from '@headlessui/react'

import { Icon } from './HeaderIcon'

export default function AvatarHeader () {
  return (
    <Popover className='relative flex items-center justify-center'>
      <Popover.Button>
        <div className='w-9 h-9'>
          <img className='object-cover rounded-full' src='https://studiosol-a.akamaihd.net/uploadfile/cifraclub/avatar/1/6/4chqb0yf7cd.jpg' />
        </div>
      </Popover.Button>

      <Popover.Panel className='absolute z-10 bg-white border border-gray-200 rounded-md shadow-md' style={{ top: '160%', right: '0%' }}>
        <div className='flex flex-row items-center p-4 border-b border-gray-200 cursor-pointer'>
          <div className='w-16 h-16 mr-4'>
            <img className='object-cover rounded-full' src='https://studiosol-a.akamaihd.net/uploadfile/cifraclub/avatar/1/6/4chqb0yf7cd.jpg' />
          </div>
          <div className='flex flex-col flex-grow overflow-hidden'>
            <h1 className='font-bold hover:text-blue-500'>Carlos</h1>
            <p className='text-sm text-gray-500'>example@gmail.com</p>
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
      </Popover.Panel>
    </Popover>
  )
}
