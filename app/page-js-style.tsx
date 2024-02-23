'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const imageUrls = {
  black: '/t-shirt-black.jpg',
  spiral: '/t-shirt-spiral.jpg',
}
const colorVariants = ['black', 'spiral']
const sizeVariants = ['xtraSmall', 'small']

export default function Home() {
  /*   const selectedColor = 'black'
  const selectedSize = 'xtraSmall' */

  const router = useRouter()
  const [selectedColor, setSelectedColor] = useState('black')
  const [selectedSize, setSelectedSize] = useState('small')

  useEffect(() => {
    // Approach-1 to use native JS lib
    /*     window.history.pushState(
      null,
      '',
      `?color=${selectedColor}&size=${selectedSize}`
    ) */

    // Approach-2 to partially use nextJS router.
    // We are still not reading from url here but just setting it.
    router.push(`?color=${selectedColor}&size=${selectedSize}`, {
      scroll: false,
    })
  }, [selectedColor, selectedSize, router])

  return (
    <main className="flex min-h-screen bg-grey-200 items-center justify-center">
      <div className="bg-white flex items-center w-[96%] rounded min-h-[75vh]">
        <div className="flxe-[2] flex justify-center">
          <Image
            priority
            // @ts-ignore
            src={imageUrls[selectedColor]}
            alt="Black"
            width={622}
            height={550}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold bg-orange-500 rounded px-2">
            Acme Circles T-shirt
          </h1>
          <section className="bg-blue-500 text-white inline-block px-2 py-1 rounded-full mt-3 mb-10">
            $20.00 USD
          </section>

          <div>
            <section className="mb-5">
              <h2 className="text-md bg-orange-500 uppercase mb-2 rounded-full">
                Color
              </h2>
              <div className="flex gap-2">
                {colorVariants.map((color, index) => (
                  <button
                    key={index}
                    className={`bg-grey-100 bg-pink-500 px-4 py-1 rounded-full border-2 ${
                      selectedColor === color
                        ? 'border-blue-500'
                        : 'border-grey-500'
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </section>

            <section className="mb-5">
              <h2 className="text-md bg-orange-500 uppercase mb-2 rounded-full">
                Sizes
              </h2>
              <div className="flex gap-2">
                {sizeVariants.map((size, index) => (
                  <button
                    key={index}
                    className={`bg-grey-100 bg-green-500 px-4 py-1 rounded-full border-2 ${
                      selectedSize === size
                        ? 'border-blue-500'
                        : 'border-grey-500'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
        Home page
      </div>
    </main>
  )
}
