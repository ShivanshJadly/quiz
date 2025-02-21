import { apiConnector } from "../apiConnector"
import { userEndpoints } from "../apis"


const {
  CREATE_USER,
  GET_USER,
  GET_ATTEMPTS
} = userEndpoints

export const createUser = async (username) => {
    try {
      const response = await apiConnector("POST", CREATE_USER, { username });
  
      if (response?.data?.success) {
        console.log("User created successfully:", response.data);
        return response.data;
      } else {
        console.error("Failed to create user:", response);
        return null;
      }
    } catch (error) {
      console.error("Error creating user:", error);
      return null;
    }
  };

export const getUser = async (username) => {
  try {
    const response = await apiConnector("GET", GET_USER, { username });

    if (response?.data?.success) {
      console.log("User fetched successfully:", response.data);
      return response.data.user;
    } else {
      console.error("Failed to fetch user:", response);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const getAttempts = async (username) => {
  try {
    const response = await apiConnector("GET", GET_ATTEMPTS, { username });

    if (response?.data?.success) {
      console.log("Attempts fetched successfully:", response.data);
      return response.data.attempts;  // Array of attempts
    } else {
      console.error("Failed to fetch attempts:", response);
      return [];
    }
  } catch (error) {
    console.error("Error fetching attempts:", error);
    return [];
  }
};



