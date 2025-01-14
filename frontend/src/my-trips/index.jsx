import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTripCardItem from "./components/UserTripCardItem";

const MyTrips = () => {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    GetUserTrip();
  }, []);

  const GetUserTrip = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
      return;
    }

    // Cancel outdated renders
    let isMounted = true;

    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user.email)
    );

    try {
      const querySnapshot = await getDocs(q);
      const trips = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        trips.push(doc.data());
      });

      if (isMounted) {
        setUserTrips(trips); // Only set trips if the component is still mounted
      }
    } catch (error) {
      console.error("Error fetching trips:", error);
    }

    return () => {
      isMounted = false; // Cleanup for future renders
    };
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-24">
      <h2 className="font-bold text-3xl">My Trips</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {userTrips?.length > 0
          ? userTrips.map((trip, index) => (
              <UserTripCardItem trip={trip} key={index} />
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="h-[280px] w-full bg-slate-200 animate-pulse rounded-xl"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default MyTrips;
