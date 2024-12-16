import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: "https://trip-ai-uv.vercel.app", // Frontend domain
  methods: ["POST", "GET"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware to handle JSON requests and enable CORS
app.use(express.json());
app.use(cors(corsOptions));

const GOOGLE_API_KEY = process.env.VITE_GOOGLE_PLACE_API_KEY;

// Proxy route for Google Places Text Search API
app.post("/api/v1/places:searchText", async (req, res) => {
  const { textQuery } = req.body;

  if (!textQuery) {
    return res.status(400).json({ error: "textQuery is required" });
  }

  const GOOGLE_PLACES_API_URL =
    "https://places.googleapis.com/v1/places:searchText";

  console.log("Google API Key:", GOOGLE_API_KEY); // Debug log

  try {
    const response = await axios.post(
      GOOGLE_PLACES_API_URL,
      {
        textQuery: textQuery,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": GOOGLE_API_KEY,
          "X-Goog-FieldMask": "places.displayName,places.photos", // Customize FieldMask for your use case
        },
      }
    );

    // Forward the response to the frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error in Google Places API Request:", error.message);
    res.status(500).json({ error: "Failed to fetch place details" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
