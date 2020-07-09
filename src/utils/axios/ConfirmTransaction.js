import axios from "axios";
import { restServiceUrl } from "../constants";

export const confirmTransaction = async ({ token, session_id }) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${session_id}` },
    };

    const response = await axios.put(
      `${restServiceUrl}/api/transaction/confirm`,
      {
        token,
      },
      config
    );
    return response.data;
  } catch (error) {
    if (error.response) return error.response;
  }
};
