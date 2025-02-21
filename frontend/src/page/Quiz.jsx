import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  return (
    <div className='min-h-screen bg-[#5E35B1] flex justify-center items-center flex-col'>
      <h1 className='text-8xl font-bold mb-4 text-[#FFC107]'>QUIZ!!</h1>
      <div className='text-lg font-bold mb-2'>
        <span className={timeLeft <= 10 ? 'text-red-500' : 'text-white'}>
          Time Left: {timeLeft}s
        </span>
      </div>
      <section className='bg-white p-6 rounded-2xl shadow-lg w-96 text-center border-3 border-black'>
        <h2 className='text-lg font-semibold mb-4'>How are you?</h2>
        <div className='flex flex-col gap-2 text-left mt-4'>
          <label className='bg-gray-100 p-2 rounded cursor-pointer flex items-center'>
            <input type='radio' name='answer' className='mr-2' /> Good
          </label>
          <label className='bg-gray-100 p-2 rounded cursor-pointer flex items-center'>
            <input type='radio' name='answer' className='mr-2' /> Fine
          </label>
          <label className='bg-gray-100 p-2 rounded cursor-pointer flex items-center'>
            <input type='radio' name='answer' className='mr-2' /> Not Great
          </label>
          <label className='bg-gray-100 p-2 rounded cursor-pointer flex items-center'>
            <input type='radio' name='answer' className='mr-2' /> Bad
          </label>
        </div>
        <div className='flex justify-between mt-4'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Next</button>
          <button className='bg-green-500 text-white px-4 py-2 rounded-lg'>Submit</button>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
