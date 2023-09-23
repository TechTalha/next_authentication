import React from 'react'
import Link from 'next/link'
const Home = () => {
  return (
    <>
    
    <section className="bg-white dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-purple-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Somethings missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we cant find that page. You will find lots to explore on the Login page. </p>
            <button 
                  className="w-full text-white bg-purple-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <Link
                    
                    href="/profile"
                  >
                    Go To Profile
                  </Link>
                </button>
               
        </div>   
    </div>
</section>
    
    
    </>
  )
}

export default Home