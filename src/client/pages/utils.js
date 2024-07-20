
import axios from "axios";
const apiUrl = process.env.API_URL || 'http://localhost:3000';
export const fetchFromDiscogs = async (endpoint, params) => {
  try {
      const response = await axios.get(`${apiUrl}}/api/records`, {
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

  export async function fetchLastFmData(){
    try{
        const response = await axios.get('http://localhost:3000/api/lastfm')
        return response
    }catch(error){
        console.error("error fetching LastFM data", error);
        throw error;

    }
  };