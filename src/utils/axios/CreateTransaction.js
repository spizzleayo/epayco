import axios from "axios";
import { restServiceUrl } from "../constants";

export const createTransaction = async ({ document,phone,value }) => {
  try {
    const response = await axios.post(`${restServiceUrl}/api/transaction`, {
        document,
        phone,
        value
    });
    return response.data;
  } catch (error) {
    if(error.response) return error.response
  }
};
