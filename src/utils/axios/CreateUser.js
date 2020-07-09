import axios from "axios";
import { restServiceUrl } from "../constants";

export const createUser = async ({ document,email, name, lastName, phone }) => {
  try {
    const response = await axios.post(`${restServiceUrl}/api/user`, {
      document,
      email,
      name,
      lastName,
      phone,
    });
    return response;
  } catch (error) {
    console.log(error.response)
    if(error.response) return error.response
  }
};
