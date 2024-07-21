
import axios from "axios";

const baseUrl = import.meta.env.VITE_REACT_APP_API_URL
export const fetchFromDiscogs = async (endpoint, params) => {
    const query = new URLSearchParams(params).toString();
    const url = `${baseUrl}/records?${query}`;
  
    try {
      const response = await fetch(url, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error(`Error fetching data from Discogs API: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data from Discogs API:", error);
      throw error;
    }
  };
export async function fetchReleaseData(endpoint ="") {
    try {
        const response = await axios.get(`${baseUrl}/api/records/${endpoint}`);
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