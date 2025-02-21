import React from "react";
import Heading from "../components/heading";

const Result = ({ username, score, wrongAttempts, onRetry }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#5E35B1]">
      <section className="text-center text-8xl text-[#FFC107] font-bold bottom-0 right-[42%]">
        <h1>Quiz!!</h1>
        <h1>Result</h1>
      </section>
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 font-bold">
        <p className="text-xl text-black mt-4">
          Username: <span className="font-bold">{username}</span>
        </p>
        <p className="text-xl text-black mt-2">
          Score:{" "}
          <span className="font-bold">{score}</span>
        </p>
        <p className="text-xl text-black mt-2">
          Attempts: <span className="font-bold">{wrongAttempts}</span>
        </p>
        <div className="flex justify-center">
        <button
          className="mt-4 px-4 py-2 bg-[#5E35B1] text-white rounded-lg hover:bg-[#4527A0] transition block mx-auto"
          onClick={onRetry}
        >
          Try Again
        </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
