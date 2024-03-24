import React from 'react';
import Image from 'next/image';

const MainContent = () => {
  return (
    <main className="pt-9 bg-orange-100 -mb-7">
      <section className="text-center my-8">
        <h1 className="text-3xl font-bold">Welcome to Coffee Roastery Bandung</h1>
        <p className="mt-4">Learn more about our services and products.</p>
      </section>

      <section className="my-8">
        <div className="bg-amber-900 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4"></h2>
          <div className="flex justify-center">
            <video controls autoPlay className="w-11/12 h-80 object-cover rounded-lg" style={{ aspectRatio: '16/9' }}>
              <source src="video-ads.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        <div className="bg-amber-900 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Latte Art</h2>
          <div className="flex justify-center">
            <Image src="/product1.jpg" alt="Special Offer" width={200} height={200} className="w-full h-auto object-cover rounded-lg" />
          </div>
          <p className="mt-4 text-black">Latte art is a method of preparing coffee created by pouring microfoam into a shot of espresso and resulting in a pattern or design on the surface of the latte.</p>
        </div>

        <div className="bg-amber-900 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Morning Coffee</h2>
          <div className="flex justify-center">
            <Image src="/product2.jpg" alt="Special Offer" width={200} height={200} className="w-full h-auto object-cover rounded-lg" />
          </div>
          <p className="mt-4 text-black">Once you wake up and smell the coffee, it’s hard to go back to sleep.” – Fran Drescher</p>
        </div>

        <div className="bg-amber-900 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Americano</h2>
          <div className="flex justify-center">
            <Image src="/product3.jpg" alt="Special Offer" width={200} height={200} className="w-full h-auto object-cover rounded-lg" />
          </div>
          <p className="mt-4 text-black">Americano is a coffee drink made by mixing one seloki espresso with hot water.The hot water used in this drink is 6 to 8 ounces.The name of this coffee was originally a mockery for Americans who asked for their espresso to be made to be thinner.</p>
        </div>

        <div className="bg-amber-900 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Manually Brewed</h2>
          <div className="flex justify-center">
            <Image src="/manualbrew.jpg" alt="Special Offer" width={200} height={200} className="w-full h-auto object-cover rounded-lg" />
          </div>
          <p className="mt-4 text-black">Manually brewed coffee is made by pouring hot water over ground coffee beans, then leaving it to brew. There are several methods for doing this, including using a strainer, percolator, and French press.</p>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
