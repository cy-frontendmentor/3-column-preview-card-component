import React from 'react';
import luxuryIcon from './images/icon-luxury.svg';
import suvsIcon from './images/icon-suvs.svg';
import sadansIcon from './images/icon-sedans.svg';

const App = () => {
  return (
    <div className=' mx-auto mt-[88px] max-w-[327px] grid lg:mt-[171px]  lg:grid-cols-3 lg:min-w-[900px]'>
      <div className=' bg-orange-bright  rounded-lg'>
        <div className=' max-w-[231px] mx-auto py-12 lg:max-w-[212px]'>
          <img src={sadansIcon} alt='' className='mb-[35px]' />
          <div className='grid gap-[25px]'>
            <h1 className=' font-title text-gray-light-very text-4xl'>
              SEDANS
            </h1>
            <p className='text-white-paragraphs'>
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
            <button className=' h-12 w-[146px] bg-gray-light-very rounded-[25px] text-orange-bright hover:text-gray-light-very hover:bg-orange-bright hover:border-2  hover:border-gray-light-very transition-all'>
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className=' bg-cyan-dark rounded-lg -translate-y-3 lg:translate-y-0 lg:-translate-x-3'>
        <div className=' max-w-[231px] mx-auto py-12 lg:max-w-[212px]'>
          <img src={suvsIcon} alt='' className='mb-[35px]' />
          <div className='grid gap-[25px]'>
            <h1 className=' font-title text-gray-light-very text-4xl'>SUVS</h1>
            <p className='text-white-paragraphs'>
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
            <button className=' h-12 w-[146px] bg-gray-light-very rounded-[25px] text-cyan-dark hover:text-gray-light-very  hover:bg-cyan-dark hover:border-2  hover:border-gray-light-very transition-all'>
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className=' bg-cyan-dark-very  rounded-lg -translate-y-6 lg:translate-y-0 lg:-translate-x-6'>
        <div className=' max-w-[231px] mx-auto py-12 lg:max-w-[212px]'>
          <img src={luxuryIcon} alt='' className='mb-[35px]' />
          <div className='grid gap-[25px]'>
            <h1 className=' font-title text-gray-light-very text-4xl'>
              LUXURY
            </h1>
            <p className='text-white-paragraphs'>
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>
            <button className=' h-12 w-[146px] bg-gray-light-very rounded-[25px] text-cyan-dark-very hover:text-gray-light-very  hover:bg-cyan-dark-very  hover:border-2  hover:border-gray-light-very transition-all '>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
