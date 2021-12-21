import { HeartIcon, ShoppingCartIcon, BellIcon } from '@heroicons/react/outline'
import { Popover, Transition } from '@headlessui/react'
import { useEffect } from "react"

import { IconHover } from './HeaderIcon'
import navItems from "../json/navItems"

export function PopoverIcons() {
  return (
    <>
      <Popover className='relative flex items-center justify-center'>
        <Popover.Button>
          <div className='items-center hidden cursor-pointer lg:flex'>
            <IconHover Icon={HeartIcon} />
          </div>
        </Popover.Button>
        <Popover.Panel className='absolute z-10 bg-white border border-gray-200 rounded-md shadow-md' style={{ top: '135%', right: '-5%', width: '20vw' }}>
          <div className='flex flex-col mx-5 my-2'>
            <h1 className='mb-4 text-sm font-bold text-center'>Tu lista de deseos está vacía.</h1>
            <a className='text-center text-blue-500'>Descubre cursos</a>
          </div>
        </Popover.Panel>
      </Popover>

      <Popover className='relative flex items-center justify-center'>
        <Popover.Button>
          <div className='items-center hidden cursor-pointer md:flex'>
            <IconHover Icon={ShoppingCartIcon} />
          </div>
        </Popover.Button>
        <Popover.Panel className='absolute z-10 bg-white border border-gray-200 rounded-md shadow-md' style={{ top: '135%', right: '-5%', width: '20vw' }}>
          <div className='flex flex-col mx-5 my-2'>
            <h1 className='mb-4 text-sm font-bold text-center'>Tu cesta está vacía.</h1>
            <a className='text-center text-blue-500 cursor-pointer hover:text-blue-600'>Seguir comprando</a>
          </div>
        </Popover.Panel>
      </Popover>

      <Popover className='relative flex items-center justify-center'>
        <Popover.Button>
          <div className='items-center hidden cursor-pointer lg:flex'>
            <IconHover Icon={BellIcon} />
          </div>
        </Popover.Button>
        <Popover.Panel className='absolute z-10 bg-white border border-gray-200 rounded-md shadow-md' style={{ top: '135%', right: '-5%', width: '22vw' }}>
          <div className='flex items-center justify-between p-5'>
            <h1 className='text-lg font-bold'>Notificaciones</h1>
            <h1 className='text-sm font-bold text-blue-500 cursor-pointer hover:text-blue-600'>Configuracion</h1>
          </div>
          <div className='flex items-center border-b border-gray-200 cursor-pointer'>
            <button className='w-1/2 pb-3 text-sm font-bold text-gray-600 border-b-2 border-black border-opacity-0 focus:text-gray-900 focus:border-opacity-100 focus:outline-none'>Instructores</button>
            <button className='w-1/2 pb-3 text-sm font-bold text-gray-600 border-b-2 border-black border-opacity-0 focus:text-gray-900 focus:border-opacity-100 focus:outline-none'>Estudiantes</button>
          </div>
          <div className='flex items-center justify-center p-5'>
            <h1 className='text-sm text-gray-600'>No hay notificaciones</h1>
          </div>
        </Popover.Panel>
      </Popover>
    </>
  )
}
export function PopoverUdemyButton() {
  return (
    <Popover className='relative flex items-center justify-center'>
      <Popover.Button>
        <div className='items-center hidden lg:flex'>
          <h1 className='text-sm font-normal text-gray-600 cursor-pointer tracking-thin whitespace-nowrap hover:text-blue-400'>Udemy for Bussiness</h1>
        </div>
      </Popover.Button>
      <Popover.Panel className='absolute z-10 bg-white border border-gray-200 rounded-md shadow-md' style={{ top: '135%', right: '-5%', width: '19vw' }}>
        <div className='flex flex-col m-5'>
          <h1 className='mb-4 text-lg font-bold text-center text-gray-800'>Dale a tu equipo acceso a más de 5.500 de los mejores cursos de Udemy en cualquier momento y lugar.</h1>
          <button className='p-3 font-bold text-center text-white bg-black rounded-md cursor-pointer bg-opacity-70'>Prueba Udemy for Bussiness</button>
        </div>
      </Popover.Panel>
    </Popover>
  )
}
export function PopoverEnsena() {
  return (
    <Popover className='relative flex items-center justify-center'>
      <Popover.Button>
        <div className='items-center hidden lg:flex'>
          <h1 className='text-sm font-normal text-gray-600 cursor-pointer tracking-thin whitespace-nowrap hover:text-blue-400'>Enseña en Udemy</h1>
        </div>
      </Popover.Button>
      <Popover.Panel className='absolute z-10 bg-white border border-gray-200 rounded-md shadow-md' style={{ top: '135%', right: '-5%', width: '19vw' }}>
        <div className='flex flex-col m-5'>
          <h1 className='mb-4 text-lg font-bold text-center text-gray-800'>Convierte lo que sabes en una oportunidad y llega a millones de personas de todo el mundo.</h1>
          <button className='p-3 font-bold text-center text-white bg-black rounded-md cursor-pointer bg-opacity-70'>Mas información</button>
        </div>
      </Popover.Panel>
    </Popover>
  )
}
export function PopoverAprendizaje() {
  return (
    <Popover className='relative flex items-center justify-center'>
      <Popover.Button>
        <div className='items-center hidden md:flex'>
          <h1 className='text-sm font-normal text-gray-600 cursor-pointer tracking-thin whitespace-nowrap hover:text-blue-400'>Mi aprendizaje</h1>
        </div>
      </Popover.Button>

      <Popover.Panel className='absolute z-10 bg-white border border-gray-200 rounded-md shadow-md' style={{ top: '135%', right: '-5%', width: '20vw' }}>
        <div className='flex items-center p-3 border-b border-gray-200 cursor-pointer'>
          <div className='flex flex-col w-1/4 h-16 rounded-md'>
            <img src='https://img-c.udemycdn.com/course/240x135/2398608_0534_2.jpg?Expires=1624996914&Signature=AmEKGf6uU0TjJHzV9Iq9d9Rt6TdL7Ov8zMesSinOkpLUICwY597dEy0DMlz7UVvM5yH8DjA7lVxSYbevQlLnzXu1~7Qka20Hy15soDy6wy3uDv1NKlsqD7t2hsuv8E87DC34YJO7ktKHD7wJHMy3O56ltbJ3Wpz~pAAD6uEqDZUAHkoiSLnpu47HBj1kPmycZicRoetXbh417lySF~QaSusjF2xJNSh143CUxRXzCCTSXExxMrRyb7G7is8zVwahSErqe-0Wm8IfPqbbjS6tihpTAkHT51EDS3KH2IUZG4Ob3XpsHG8~k46n05U~PbxdKwgkHJeGOWFhjdVp0w9sPA__&Key-Pair-Id=APKAITJV77WS5ZT7262A' className='object-cover w-full h-full rounded-md' />
          </div>
          <div className='flex flex-col w-3/4 pl-4 mb-12'>
            <h1 className='break-words whitespace-normal'>Titulo del curso</h1>
          </div>
        </div>
        <div className='flex items-center p-3 border-b border-gray-200 cursor-pointer'>
          <div className='flex flex-col w-1/4 h-16 rounded-md'>
            <img src='https://img-c.udemycdn.com/course/240x135/3096364_6113_3.jpg?Expires=1624996914&Signature=UHlGMcso62UnQ9PspdEWe~KautymibgRITpOhV7IsYIr8hDHzX5YYykEc4BJuYEuwrd3FrhtLFxCNPqQxpBFf73M4eScH3uWoxHZa3-vcpxiSjWXba-9ko76w9DlLun9Ak-IZjXTxZFwKeJLBvdy5YZvXp8Gt7AZ~vuidEW6aZR2kHObzAOTwPZH91NF93MTPw-HGr9~gRChnF2CpTAPSnduuwh9QR3hJA8xwGaqx0xvMXWOmszyWIajHg29Fge6O8dmxfImQHnF7uh5bhKsRJhx2Y8N0M3iLKCFeAi5FfGI~cWiIJnBeHDLj-1eiypp737-aRRssSuM9bfuEGE7RA__&Key-Pair-Id=APKAITJV77WS5ZT7262A' className='object-cover w-full h-full rounded-md' />
          </div>
          <div className='flex flex-col w-3/4 pl-4 mb-12'>
            <h1 className='break-words whitespace-normal'>Titulo del curso</h1>
          </div>
        </div>
        <div className='flex items-center p-3 border-b border-gray-200 cursor-pointer'>
          <div className='flex flex-col w-1/4 h-16 rounded-md'>
            <img src='https://img-c.udemycdn.com/course/240x135/2516170_d229_2.jpg?Expires=1624996914&Signature=hw3k9Nd~QBJCXxStwDOFrx99S5JTRP8-Al58hjL4noGHDV9qu8qWkRpYBCJx~iKOToU5h8TvGhi0o2IprAXvcoW38zNbsMgTR4kgPZR6vV9KdBnrtGCQeJa7x3nhJdMBSmoPTfxUqIBDvH-NE36WFyd1sPY00IHi~XmveZZyXlQGawhYjAmF~uIneIP3HQNQCiAAT9rdlTF~9-DigUl6KVHq~Jq1vAOyIqFtfXi6w47zBkd7LmSz3h2o8PT9dCvkxyd48f4vYh~f-7KWHZiTouxzYh368yh8I6vwMGejMB9EJwa6hhiiW0E0zfFvniBR6~WMWOsnLpSWORwEgL-rFA__&Key-Pair-Id=APKAITJV77WS5ZT7262A' className='object-cover w-full h-full rounded-md' />
          </div>
          <div className='flex flex-col w-3/4 pl-4 mb-12'>
            <h1 className='break-words whitespace-normal'>Titulo del curso</h1>
          </div>
        </div>
        <div className='flex items-center p-3 border-b border-gray-200 cursor-pointer'>
          <div className='flex flex-col w-1/4 h-16 rounded-md'>
            <img src='https://img-c.udemycdn.com/course/240x135/3311100_6db7_3.jpg?Expires=1624996914&Signature=Z06b~wQECzbReqwTK6zn6yg0KL2WI3mnVKysSqb2LYcAbanINXW5uXt282CXgRE3L4MRa-VF5bkKuTI3c-VQMQVgrIvUuUVCI2yVhBck6FxxXtmEUCmEiDOmCzBCMDjhasXK9JVqXfQ1EYmWehdI3LZm-AuOQps~aHd2h-gIRIsOVzCfKKtfv46nz~~gcIvKvf4SvIyEbITeV0AZSc6uV7dM9NcHtRnnUOEEGflIkfb3ku4n9wJuN4FN-kdDzcvKQE7ocEUzzNNb0WUuSuzGHQTCLEqv-YCURqU7r8RRgfJK2ne7dBRgfedl67KPUiGSQEHzZfJ3TM1RSF-666TGNg__&Key-Pair-Id=APKAITJV77WS5ZT7262A' className='object-cover w-full h-full rounded-md' />
          </div>
          <div className='flex flex-col w-3/4 pl-4 mb-12'>
            <h1 className='break-words whitespace-normal'>Titulo del curso</h1>
          </div>
        </div>
        <div className='flex items-center p-3 cursor-pointer'>
          <a href='' className='w-full p-3 font-bold text-center text-white bg-black rounded-md cursor-pointer bg-opacity-70'>Ir a Mi Aprendizaje</a>
        </div>

      </Popover.Panel>
    </Popover>
  )
}
export function PopoverNavButton() {
  return (
    <>
      {
        navItems.map(i => (
          <Popover key={i.title} className='relative flex items-center justify-center'>
            <Popover.Button>
              <div className='flex items-center'>
                <h1 className='text-sm font-normal text-gray-600 cursor-pointer tracking-thin whitespace-nowrap hover:text-blue-400'>{i.title}</h1>
              </div>
            </Popover.Button>

            <Transition
              enter='transition duration-50 ease-out'
              leave='transition duration-200 ease-out'
            >
              <Popover.Panel className='absolute z-10 border border-gray-200 rounded-md shadow-md'>
                <div className='fixed left-0 flex justify-center w-screen space-x-5 bg-gray-900 top-28'>
                  {i.items.map(data => (
                    <ul key={data}>
                      <li className='py-3 text-white cursor-pointer hover:text-blue-400'>{data}</li>
                    </ul>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        )).slice(0, 10)
      }
    </>
  )
}
