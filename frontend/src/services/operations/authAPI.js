import { apiConnector } from "../apiConnector"
import { userEndpoints } from "../apis"


const {
  CREATE_USER,
  GET_USER
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



