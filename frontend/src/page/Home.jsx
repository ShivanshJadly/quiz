import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert(`Username entered: ${name}`);
  };

  return (
    <div className="p-4 space-y-2">
      <section>
        <h1>Rules:</h1>
        <ul>
          <li>1. You will be given 5 questions</li>
          <li>2. You will be given 30 seconds to answer each question</li>
          <li>3. You will be given 10 points for each correct answer</li>
        </ul>
      </section>
      <section>
        <h1 className="text-black text-xl font-bold">Enter Username</h1>
        <input
          type="text"
          placeholder="Enter Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </section>
    </div>
  );
};

export default Home;