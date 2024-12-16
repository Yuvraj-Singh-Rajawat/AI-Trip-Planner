import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HotelCardItem = ({ hotel }) => {
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    hotel && fetchPlacePhoto();
  }, [hotel]);

  const fetchPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.HotelName,
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
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel.HotelName +
        "," +
        hotel?.HotelAddress
      }
      target={"_blank"}
    >
      <div className="hover:scale-105 cursor-pointer transition-all">
        <img src={photoUrl? photoUrl : "/road-trip.webp"} className="rounded-xl h-[180px] w-full object-cover" />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-[750]">{hotel?.HotelName}</h2>
          <h2 className="text-xs text-gray-500">📍 {hotel?.HotelAddress}</h2>
          <h2 className="text-sm font-[500]">💰 {hotel?.Price}</h2>
          <h2 className="text-sm font-[500]">⭐ {hotel?.Rating}</h2>
        </div>
      </div>
    </Link>
  );
};

export default HotelCardItem;
