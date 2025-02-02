import axios from "axios";

const BASE_URL = "https://ai-trip-planner-p2cs.onrender.com/api/v1/places:searchText";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`,
  },
};

export const GetPlaceDetails = async (data) => {
  try {
    console.log("Sending Request to Backend:", data); // Debug
    const response = await axios.post(BASE_URL, data, config);
    console.log("Response from Backend:", response.data); // Debug
    return response.data;
  } catch (error) {
    console.error("Error in Backend Request:", error); // Debug
    throw error;
  }
};

export const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=" +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
