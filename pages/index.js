import Head from 'next/head'

import Header from '../components/Header'
import VideosInicio from '../components/VideosInicio'
import { SwiperInicio } from '../components/Swiper'

export default function Home() {
  return (
    <>
      <Head>
        <title>Udemy</title>
        <link rel='icon' href='/udemyIcon.svg' />
      </Head>

      <Header />
      <main>
        <SwiperInicio />

        <section className='w-full p-5 mx-auto lg:w-5/6'>
          <div className='flex flex-col justify-between mt-10 mb-2 whitespace-nowrap md:flex-row'>
            <h1 className='w-full overflow-hidden text-xl font-bold text-gray-800 md:text-3xl sm:text-2xl tracking-thin md:w-4/6 font-suisse'>Empecemos a aprender</h1>
            <a className='flex items-end font-bold text-blue-500 text-1xl tracking-thin hover:text-blue-700' href='https://www.udemy.com/home/my-courses/'>Mi aprendizaje</a>
          </div>

          <div className='flex flex-col justify-around space-y-5 md:space-x-5 md:flex-row md:space-y-0'>
            <VideosInicio />
          </div>
        </section>
      </main>
    </>
  )
}
