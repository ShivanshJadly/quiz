import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Heading from "../components/heading";
import { getUser } from "../services/operations/authAPI";
import { selectCurrentUser } from "../slices/authSlice";

const Result = () => {
  const [userData, setUserData] = useState(null);
  const username = useSelector(selectCurrentUser);

  useEffect(() => {
    const fetchUserData = async (username) => {
      try {
        const response = await getUser(username);
        console.log("response", response);
        setUserData(response?.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData(username);
  }, []);

  const totalScore = userData?.attempts?.reduce((sum, attempt) => sum + (attempt.score || 0), 0) || 0;
  // console.log("userData",userData);
  // console.log("totalScore",totalScore);



  return (
    <div className="flex items-center justify-center min-h-screen bg-[#5E35B1] gap-2">
      <section className="text-center text-8xl text-[#FFC107] font-bold bottom-0 right-[42%] border-r-2 pr-2">
        <h1>Quiz!!</h1>
        <h1>Result</h1>
      </section>
      <div className="p-6 rounded-2xl shadow-lg w-80 font-bold border-2 border-black bg-[#FFD54F]">
        <p className="text-xl text-black mt-4">
          Username: <span className="font-bold">{userData?.username || username}</span>
        </p>
        <p className="text-xl text-black mt-2">
          Score: <span className="font-bold">{totalScore*10}</span>
        </p>

        <p className="text-xl text-black mt-2">
          Attempts: <span className="font-bold">{userData?.attempts?.length}</span>
        </p>
      </div>
    </div>
  );
};

export default Result;
