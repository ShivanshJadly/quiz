const BASE_URL = import.meta.env.VITE_BASE_URL;

export const attemptEndpoints = {
    SAVE_ATTEMPT: BASE_URL + "/attempt",
  }

export const userEndpoints = {
    CREATE_USER: BASE_URL + "/user",
    GET_USER: BASE_URL + "/userAttempt",
  }

  
