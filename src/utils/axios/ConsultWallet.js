import axios from "axios";
import { restServiceUrl } from "../constants";

export const consultWallet = async ({ document,phone }) => {
  try {
    const response = await axios.get(`${restServiceUrl}/api/user/wallet`, {
      params : {
        document,
        phone
      }
    });
    return response.data;
  } catch (error) {
    if(error.response) return error.response
  }
};
