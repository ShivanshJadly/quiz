const BASE_URL = import.meta.env.VITE_BASE_URL;

export const attemptEndpoints = {
    SAVE_ATTEMPT: BASE_URL + "/attempt",
  }

export const userEndpoints = {
    CREATE_USER: BASE_URL + "/user",
    GET_USER: BASE_URL + "/user",
  }

  export const quizEndpoints = {
    GET_QUIZ: BASE_URL + "/quiz",
    GET_QUIZ_BY_ID: BASE_URL + "/quiz/:quizId",
  }

  
