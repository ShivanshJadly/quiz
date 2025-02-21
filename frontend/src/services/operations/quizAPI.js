import { apiConnector } from "../apiConnector"
import { quizEndpoints } from "../apis"

const {
  GET_QUIZ,
  GET_QUIZ_BY_ID
} = quizEndpoints

export const getQuiz = async () => {
    try {
      const response = await apiConnector("GET", GET_QUIZ);
    //   console.log("response",response)
      return response;
    } catch (error) {
      console.error("Error fetching quizzes:", error);
      return { success: false, message: "Error fetching quizzes" };
    }
  };
  
  export const getQuizById = async (quizId) => {
    try {
      const response = await apiConnector("GET", `${GET_QUIZ_BY_ID}/${quizId}`);
      return response;
    } catch (error) {
      console.error("Error fetching quiz by ID:", error);
      return { success: false, message: "Error fetching quiz" };
    }
  };



