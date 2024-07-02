
import axios from "axios";
export const fetchFromDiscogs = async (endpoint, params) => {
  try {
      const response = await axios.get(`http://localhost:3000/api/records`, {
          params: params,
      });
      return response;
  } catch (error) {
      console.error("Error fetching data from Discogs API:", error);
      throw error;
  }
};

export async function fetchReleaseData(endpoint ="") {
    try {
        const response = await axios.get(`http://localhost:3000/api/records/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data from Discogs API:", error);
        throw error;
    }
  };