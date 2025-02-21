const BASE_URL = process.env.REACT_APP_BASE_URL;


export const endpoints = {
    SAVE_ATTEMPT: BASE_URL + "/attempt",
    GET_ATTEMPT: BASE_URL + "/attemptHistory",
  }