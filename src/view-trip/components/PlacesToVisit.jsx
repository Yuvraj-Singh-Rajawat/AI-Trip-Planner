import React from "react";
import PlaceCardItem from "./PlaceCardItem";

const PlacesToVisit = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-xl my-5">Places To Visit</h2>

      <div>
        {trip?.tripData?.itinerary?.map((item, index) => (
          <div key={index} className="mt-5">
            <h2 className="font-medium text-lg mt-5 mb-2 text-[#355f4e]">{item.Day}</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {item.Plan.map((place, index) => (
                <div key={index} className="">
                  <h2 className="font-medium text-sm text-orange-800">
                    {place.BestTimeToVisit}
                  </h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
