import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,

  history: [
    {
      role: "user",
      parts: [
        {
          text: " ",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotels": [\n    {\n      "HotelName": "Circus Circus Hotel & Casino",\n      "HotelAddress": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "Price": "$40 - $80 per night",\n      "HotelImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Circus_Circus_Las_Vegas_view.jpg/1280px-Circus_Circus_Las_Vegas_view.jpg",\n      "GeoCoordinates": {\n        "latitude": 36.1395,\n        "longitude": -115.1656\n      },\n      "Rating": "3.5/5",\n      "Description": "A classic, family-friendly option on the Strip with a variety of budget-friendly rooms, a large indoor theme park, and several dining options."\n    },\n    {\n      "HotelName": "Excalibur Hotel & Casino",\n      "HotelAddress": "3850 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "Price": "$50 - $90 per night",\n      "HotelImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Excalibur_Hotel_%28Las_Vegas%29_01.jpg/1280px-Excalibur_Hotel_%28Las_Vegas%29_01.jpg",\n      "GeoCoordinates": {\n        "latitude": 36.0986,\n        "longitude": -115.1722\n      },\n      "Rating": "3.8/5",\n      "Description": "A medieval-themed hotel at the south end of the Strip offering affordable accommodations, shows, and dining within its unique castle design."\n    },\n    {\n      "HotelName": "OYO Hotel & Casino Las Vegas",\n      "HotelAddress": "115 E Tropicana Ave, Las Vegas, NV 89109",\n      "Price": "$45 - $85 per night",\n      "HotelImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OYO_Las_Vegas_front_view_2021.jpg/1280px-OYO_Las_Vegas_front_view_2021.jpg",\n      "GeoCoordinates": {\n        "latitude": 36.0982,\n        "longitude": -115.1634\n      },\n      "Rating": "3.6/5",\n      "Description": "Located just off the Strip, this hotel offers a more budget-friendly option while still being conveniently close to the action. It features basic amenities and a casino."\n    }\n  ],\n  "itinerary": [\n {\n "Day": "day1",\n "Plan": [\n {\n "PlaceName": "Welcome to Fabulous Las Vegas Sign",\n "PlaceDetails": "Iconic Las Vegas sign for photos.",\n "PlaceImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Welcome_to_Las_Vegas_sign.jpg/1280px-Welcome_to_Las_Vegas_sign.jpg",\n "GeoCoordinates": {\n "latitude": 36.0828,\n "longitude": -115.1725\n },\n "TicketPricing": "Free",\n "Rating": "4.5/5",\n "TimeToTravel": "15 minutes from hotels",\n "BestTimeToVisit": "10:00 AM - 6:00 PM"\n },\n {\n "PlaceName": "Bellagio Conservatory & Botanical Gardens",\n "PlaceDetails": "Beautiful free indoor garden display that changes seasonally.",\n "PlaceImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bellagio_Conservatory.jpg/1280px-Bellagio_Conservatory.jpg",\n "GeoCoordinates": {\n "latitude": 36.1129,\n "longitude": -115.1743\n },\n "TicketPricing": "Free",\n "Rating": "4.7/5",\n "TimeToTravel": "10-15 minutes walk from sign",\n "BestTimeToVisit": "11:00 AM - 8:00 PM"\n },\n {\n "PlaceName": "Bellagio Fountains",\n "PlaceDetails": "Spectacular water show synchronized to music.",\n "PlaceImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Bellagio_Fountains_%282018%29.jpg/1280px-Bellagio_Fountains_%282018%29.jpg",\n "GeoCoordinates": {\n "latitude": 36.1125,\n "longitude": -115.1750\n },\n "TicketPricing": "Free",\n "Rating": "4.8/5",\n "TimeToTravel": "Adjacent to Conservatory",\n "BestTimeToVisit": "8:00 PM - 12:00 AM"\n }\n {\n "Day": "day2",\n "Plan": [\n {\n "PlaceName": "Welcome to Fabulous Las Vegas Sign",\n "PlaceDetails": "Iconic Las Vegas sign for photos.",\n "PlaceImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Welcome_to_Las_Vegas_sign.jpg/1280px-Welcome_to_Las_Vegas_sign.jpg",\n "GeoCoordinates": {\n "latitude": 36.0828,\n "longitude": -115.1725\n },\n "TicketPricing": "Free",\n "Rating": "4.5/5",\n "TimeToTravel": "15 minutes from hotels",\n "BestTimeToVisit": "10:00 AM - 6:00 PM"\n },\n {\n "PlaceName": "Bellagio Conservatory & Botanical Gardens",\n "PlaceDetails": "Beautiful free indoor garden display that changes seasonally.",\n "PlaceImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bellagio_Conservatory.jpg/1280px-Bellagio_Conservatory.jpg",\n "GeoCoordinates": {\n "latitude": 36.1129,\n "longitude": -115.1743\n },\n "TicketPricing": "Free",\n "Rating": "4.7/5",\n "TimeToTravel": "10-15 minutes walk from sign",\n "BestTimeToVisit": "11:00 AM - 8:00 PM"\n },\n {\n "PlaceName": "Bellagio Fountains",\n "PlaceDetails": "Spectacular water show synchronized to music.",\n "PlaceImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Bellagio_Fountains_%282018%29.jpg/1280px-Bellagio_Fountains_%282018%29.jpg",\n "GeoCoordinates": {\n "latitude": 36.1125,\n "longitude": -115.1750\n },\n "TicketPricing": "Free",\n "Rating": "4.8/5",\n "TimeToTravel": "Adjacent to Conservatory",\n "BestTimeToVisit": "8:00 PM - 12:00 AM"\n }\n {\n "Day": "day3",\n "Plan": [\n {\n "PlaceName": "Welcome to Fabulous Las Vegas Sign",\n "PlaceDetails": "Iconic Las Vegas sign for photos.",\n "PlaceImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Welcome_to_Las_Vegas_sign.jpg/1280px-Welcome_to_Las_Vegas_sign.jpg",\n "GeoCoordinates": {\n "latitude": 36.0828,\n "longitude": -115.1725\n },\n "TicketPricing": "Free",\n "Rating": "4.5/5",\n "TimeToTravel": "15 minutes from hotels",\n "BestTimeToVisit": "10:00 AM - 6:00 PM"\n },\n {\n "PlaceName": "Bellagio Conservatory & Botanical Gardens",\n "PlaceDetails": "Beautiful free indoor garden display that changes seasonally.",\n "PlaceImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bellagio_Conservatory.jpg/1280px-Bellagio_Conservatory.jpg",\n "GeoCoordinates": {\n "latitude": 36.1129,\n "longitude": -115.1743\n },\n "TicketPricing": "Free",\n "Rating": "4.7/5",\n "TimeToTravel": "10-15 minutes walk from sign",\n "BestTimeToVisit": "11:00 AM - 8:00 PM"\n },\n {\n "PlaceName": "Bellagio Fountains",\n "PlaceDetails": "Spectacular water show synchronized to music.",\n "PlaceImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Bellagio_Fountains_%282018%29.jpg/1280px-Bellagio_Fountains_%282018%29.jpg",\n "GeoCoordinates": {\n "latitude": 36.1125,\n "longitude": -115.1750\n },\n "TicketPricing": "Free",\n "Rating": "4.8/5",\n "TimeToTravel": "Adjacent to Conservatory",\n "BestTimeToVisit": "8:00 PM - 12:00 AM"\n }\n ]\n }\n ]\n}```',
        },
      ],
    },
  ],
});
