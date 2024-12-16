export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A solo travels in exploration",
    icon: "✈",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travels in tandem",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏡",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "⛵",
    people: "6 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Dont worry about cost",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveller} with a {budget} budget. Give me a Hotels options list with HotelName, Hotel Address, Price, Hotel Image URL, Geo Coordinates, Rating, Descriptions and suggest an itinerary which is array of object with day and plan and plan is and array which contains objects with Place Name, Place Details, Place Image URL, Geo Coordinates, BestTimeToVisit, Ticket Pricing, Rating, Time duration to travel each of the location for {totalDays} days with each day plan with the best time to visit in JSON format.";
