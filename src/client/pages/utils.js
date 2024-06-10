
import axios from "axios";
export const fetchFromDiscogs = async (endpoint, params) => {
  try {
      const response = await axios.get(`http://localhost:3000/api/records`, {
          params: params,
      });
      console.log(`data is ${response}`)
      return response;
  } catch (error) {
      console.error("Error fetching data from Discogs API:", error);
      throw error;
  }
};