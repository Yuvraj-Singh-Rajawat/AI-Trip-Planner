import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { FaRegUserCircle } from "react-icons/fa";
import { PiUserCircleLight } from "react-icons/pi";
import axios from "axios";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${tokenInfo.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        setOpenDialog(false);
        onGenerateTrip();
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
        toast("Failed to fetch user profile. Please try again.");
      });
  };

  const logoutAndRedirect = () => {
    googleLogout();
    localStorage.clear();
    window.location.href = "/"; // Navigate to home page after logout
  };

  return (
    <div className="p-3 shadow-md flex justify-between items-center px-5 w-full fixed backdrop-blur-md top-0 left-0">
      <a href="/">
        <img src="/image-removebg-preview.png" alt="" className="h-10" />
      </a>

      <div className="">
        {user ? (
          <div className="flex items-center gap-3">
            <a href="/create-trip">
              <Button variant="outline" className="rounded-full">
                + Create Trip
              </Button>
            </a>
            <a href="/my-trips">
              <Button variant="outline" className="rounded-full">
                My Trips
              </Button>
            </a>

            <Popover>
              <PopoverTrigger>
                <PiUserCircleLight className="w-10 h-10 rounded-full" />
              </PopoverTrigger>
              <PopoverContent>
                <a href="/">
                  <h2 className="cursor-pointer" onClick={logoutAndRedirect}>
                    Logout
                  </h2>
                </a>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="" />
              <h2 className="font-bold text-lg mt-7">Sign in With Google</h2>
              <p>Sign in to the App with Google authentication securely</p>

              <Button
                className="w-full mt-10"
                onClick={() => login()}
                variant="outline"
              >
                <FcGoogle className="text-2xl mr-4" />
                Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Header;
