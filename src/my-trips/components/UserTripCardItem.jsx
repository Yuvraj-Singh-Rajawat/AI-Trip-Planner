import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserTripCardItem = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    trip && fetchPlacePhoto();
  }, [trip]);

  const fetchPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };

    try {
      const response = await GetPlaceDetails(data);
      console.log("API Response:", response);

      const photoReference = response?.places?.[0]?.photos?.[3]?.name;

      if (photoReference) {
        const PhotoUrl = PHOTO_REF_URL.replace("{NAME}", photoReference);

        setPhotoUrl(PhotoUrl);
      } else {
        console.warn("No photo reference found in response.");
      }
    } catch (error) {
      console.error("Error fetching place photo:", error);
    }
  };

  return (
    <Link to={`/view-trip/${trip.id}`}>
      <div className="hover:scale-105 transition-all">
        <img
          src={photoUrl ? photoUrl : "/road-trip.webp"}
          alt=""
          className="object-cover rounded-xl h-[280px] w-[320px]"
        />
        <div>
          <h2>{trip.userSelection.location.label}</h2>
          <h2 className="text-sm text-gray-500">
            {trip.userSelection.noOfDays} Days trip with{" "}
            {trip.userSelection.budget} Budget
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default UserTripCardItem;
