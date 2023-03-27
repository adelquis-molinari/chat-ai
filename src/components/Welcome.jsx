import { ReactIcon } from './icon'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export function Welcome() {
  const [animationParent] = useAutoAnimate()

  return (
    <section
      ref={animationParent}
      className='flex justify-center w-full m-auto'
    >
      <div className='w-full px-6 text-gray-400 md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col dark:text-gray-100'>
        <h1 className='text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 flex gap-2 items-center justify-center'>
          Chat AI
        </h1>

        <p className='block max-w-md m-auto mb-10 text-center align-middle'>
          Esta página <strong>no es la oficial de ChatGPT</strong>. Es un clon
          creado con React <ReactIcon className='inline-block w-6 h-6' /> y
          Tailwind para fines educativos.
        </p>
      </div>
    </section>
  )
}
