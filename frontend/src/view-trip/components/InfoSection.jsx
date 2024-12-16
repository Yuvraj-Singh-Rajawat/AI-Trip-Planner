import { Button } from "@/components/ui/button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";

const InfoSection = ({ trip }) => {
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
    <div>
      <img
        src={photoUrl || "/road-trip.webp"}
        className="h-[340px] w-full object-cover rounded-xl"
        alt="Trip"
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-base">
              📅 {trip?.userSelection?.noOfDays} Days
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-base">
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-base">
              🥂 No. of Travellers : {trip?.userSelection?.traveller}
            </h2>
          </div>
        </div>

        <Button>
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
};

export default InfoSection;
