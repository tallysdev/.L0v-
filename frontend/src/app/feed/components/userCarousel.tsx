"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaRegUser } from "react-icons/fa";
import { User } from "../../../../types";
import { UserCard } from "@/app/components/userCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface UserCarouselProps {
  users: User[];
}


export function UserCarousel({ users: initialUsers }: UserCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rightSwipeCount, setRightSwipeCount] = useState(0);
  const [visibleUsers, setVisibleUsers] = useState(initialUsers);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    afterChange: (current: number) => setCurrentSlide(current),
    swipe: true,
    onSwipe: (direction: "left" | "right") => {
      if (direction === "left") {
        console.log("left");
        handleLeftSwipe();
      } else if (direction === "right") {
        console.log("right");
        handleRightSwipe();
      }
    },
  };

  const handleLeftSwipe = () => {
    // Check if there's more than one user before allowing left swipe
    if (visibleUsers.length > 1) {
      const updatedUsers = [...visibleUsers];
      updatedUsers.splice(currentSlide, 1);
      setVisibleUsers(updatedUsers);
    }
  };

  const handleRightSwipe = () => {
    setRightSwipeCount((prevCount) => prevCount + 1);

    if (rightSwipeCount === 2) {
      const matchedUser = visibleUsers[currentSlide];
      alert(
        `It's a match! Send a message to the user ${matchedUser.username} on their email ${matchedUser.email}`
      );
      setRightSwipeCount(0);
    }
  };

  return (
    <div className="flex items-center max-w-xl w-full justify-center min-h-screen min-w-full text-white bg-gradient-to-tr dark:from-gray-800 dark:to-black-700">
      {visibleUsers.length > 0 ? (
        <Slider {...settings} className="max-w-xl w-full">
          {visibleUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Slider>
      ) : (
        <p className="text-white text-lg">
          There are no users to show right now. Please come back later.
        </p>
      )}
    </div>
  );
}
