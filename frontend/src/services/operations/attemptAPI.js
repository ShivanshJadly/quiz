import { apiConnector } from "../apiConnector"
import { attemptEndpoints } from "../apis"


const {
  SAVE_ATTEMPT
} = attemptEndpoints

// Save Attempt API
export const saveAttempt = async (username, quizId, selectedAnswer) => {
  try {
    const response = await apiConnector("POST", SAVE_ATTEMPT, {
        username,
        quizId,
        selectedAnswer,
      })
      console.log("response",response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error saving attempt:", error);
    return { success: false, message: "Failed to save attempt" };
  }
};

// Get Attempts API
export const getAttempts = async (username, quizId, page = 1, limit = 10) => {
  try {
    const response = await fetch(
      `${API_URL}/attempts?username=${username}&quizId=${quizId}&page=${page}&limit=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching attempts:", error);
    return { success: false, message: "Failed to fetch attempts" };
  }
};
