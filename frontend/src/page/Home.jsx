import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Rule from "../components/Rule";
import { createUser } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert("Please enter a username.");
      return;
    }

    const result = await createUser(name);

    if (result) {
      dispatch(setCredentials({ username: name }));
      alert("User created successfully!");
      navigate("/quiz");
    } else {
      alert("Failed to create user. Try again!");
    }
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