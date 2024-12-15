import { Button } from "@/components/ui/button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PlaceCardItem = ({ place }) => {
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    place && fetchPlacePhoto();
  }, [place]);

  const fetchPlacePhoto = async () => {
    const data = {
      textQuery: place?.PlaceName,
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
      to={"https://www.google.com/maps/search/?api=1&query=" + place?.PlaceName}
      target={"_blank"}
    >
      <div className="border rounded-xl p-3 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src={photoUrl? photoUrl : "/road-trip.webp"}
          alt=""
          className="w-[130px] h-[130px] rounded-xl object-cover"
        />
        <div>
          <h2 className="font-medium text-lg">{place?.PlaceName}</h2>
          <p className="text-sm text-gray-400">{place?.PlaceDetails}</p>
          <h2 className="mt-2 text-base text-stone-700">
            🕙 {place.TimeToTravel}
          </h2>
          <Button size="sm">
            <FaMapLocationDot />
          </Button>
        </div>
      </div>
    </Link>
  );
};
export default PlaceCardItem;
