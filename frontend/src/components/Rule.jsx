import React from 'react'

const Rule = () => {
  return (
    <div className='relative flex justify-end p-2'>
      <section className='absolute text-center text-8xl text-[#FFC107] font-bold bottom-0 right-[42%]'><h1>Quiz!!</h1></section>
      <section className="border-4 border-black rounded-md p-4 w-[20%] bg-[#FFC107] font-bold">
        <ul>
        <h1 className='underline text-lg mb-2'>Rules:</h1>
          <li>1. You will be given 5 questions</li>
          <li>2. You will be given 30 seconds to answer each question</li>
          <li>3. You will be given 10 points for each correct answer</li>
        </ul>
      </section>
    </div>
  )
}

export default Rule
