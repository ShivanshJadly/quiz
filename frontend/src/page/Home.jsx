import React, { useState } from "react";
import Rule from "../components/Rule";
const Home = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert(`Username entered: ${name}`);
  };

  return (
    <div className="space-y-16 bg-[#5E35B1] min-h-screen">
      <section className="justify-between items-center">
        <Rule />
      </section>
      
      <section className="flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold text-[#FFC107]">Enter Username</h1>
        <input
          type="text"
          placeholder="Enter Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-1/2 bg-white"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Submit
        </button>
      </section>
    </div>
  );
};

export default Home;