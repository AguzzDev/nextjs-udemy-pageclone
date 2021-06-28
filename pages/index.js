import Head from 'next/head'

import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Udemy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/udemyIcon.svg" />
      </Head>

      <Header />
      <main>
        <div className="relative w-full xl:w-5/6 mx-auto">
          <div className="hidden md:flex flex-col absolute bg-white p-5 shadow-xl rounded-md left-16 md:w-5/12 md:top-10 lg:w-4/12 xl:top-16 xl:w-2/6">
            <h1 className="text-4xl font-bold text-gray-700 tracking-thin">Aspira a más</h1>
            <p className="text-md lg:text-lg mt-2 leading-2">Aprender te mantiene a la vanguardia. Consigue las habilidades más demandadas para impresionar a cualquiera.</p>
          </div>
          <img src="https://img-c.udemycdn.com/notices/featured_banner/image_udlite/1999ee6d-47cd-42f2-baca-747713a0228b.jpg?Expires=1624590636&Signature=FfEzjxjBDN2kuE0G2U0AZ9u-sQKK1lE4FgEfEWSWsICBFvcJ52g244NIvl0NROUcd4ixyV9GTuMs4IcF5oL1e46a1dHo9XPG9hmJuMrz2NOkPQ2g17o3rP1A~gAkgO5MxoclRA87ZayFNJTZ37fxT92-XYvz2wK9H0bzKI6lR3TgRY9AA6npI7xc3qT8~EWwZ2ISHXRvQPZc0zS05GelHqhSdA4syWa-jw~zGk9P9kLI4VEBbwHKTSgzYGXW~azzP8k8MXqHhhOVLXWtZiBT7TNlMqtR6jtfAN3P-979qvN5jAPZjpx8cwL0iQIakWAzK~tbDOtHgjR4szGybYts0Q__&Key-Pair-Id=APKAITJV77WS5ZT7262A" />
        </div>

        <section className="p-5 mx-auto w-full lg:w-5/6">
          <div className="flex flex-col justify-between mt-10 mb-2 whitespace-nowrap md:flex-row">
            <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-gray-800 tracking-thin w-full md:w-4/6 overflow-hidden">Empecemos a aprender, Carlos</h1>
            <a className="flex items-end text-1xl font-bold tracking-thin text-blue-500 hover:text-blue-700" href="https://www.udemy.com/home/my-courses/">Mi aprendizaje</a>
          </div>
          <div className="flex justify-around space-x-5 md:space-x-5">
            <div className="flex flex-row w-2/4 md:w-2/6 h-40 border border-gray-300 rounded-sm">
              <div className="flex flex-col w-2/4 bg-black">
                <img className="object-cover" src=""></img>
              </div>
              <div className="flex flex-col w-3/4">
                <p className="text-sm pt-4 pr-4 pl-4 text-gray-700"></p>
                <h1 className="font-bold pr-4 pl-4 tracking-tight text-md text-gray-900"></h1>
                <div className="flex items-end flex-grow pr-4 pl-4">
                  <p className="text-sm text-gray-700"></p>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-2/4 md:w-2/6 h-40 border border-gray-300 rounded-sm">
              <div className="flex flex-col w-2/4 bg-black">
                <img className="object-cover" src=""></img>
              </div>
              <div className="flex flex-col w-3/4">
                <p className="text-sm pt-4 pr-4 pl-4 text-gray-700"></p>
                <h1 className="font-bold pr-4 pl-4 tracking-tight text-md text-gray-900"></h1>
                <div className="flex items-end flex-grow pr-4 pl-4">
                  <p className="text-sm text-gray-700"></p>
                </div>
              </div>
            </div>
            <div className="hidden xl:flex flex-row w-2/6 border border-gray-300 rounded-sm">
              <div className="flex flex-col w-2/4 bg-black">
                <img className="object-cover" src=""></img>
              </div>
              <div className="flex flex-col w-3/4">
                <p className="text-sm pt-4 pr-4 pl-4 text-gray-700"></p>
                <h1 className="font-bold pr-4 pl-4 tracking-tight text-md text-gray-900"></h1>
                <div className="flex items-end flex-grow pr-4 pl-4">
                  <p className="text-sm text-gray-700"></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
