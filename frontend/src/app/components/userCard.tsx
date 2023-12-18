import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { FaRegUser } from "react-icons/fa";
import { User } from "../../../types";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-blue-950 p-20">
      <div
        className="flex flex-col items-center justify-center p-24 py-20 rounded-md "
        style={{
          background:
            "linear-gradient(to bottom right, #94BBE9 0%, #EEAECA 100%)",
        }}
      >
        <div className="mb-8 border-2 border-gray-400 rounded-full overflow-hidden p-2 shadow-md">
          <Image
            src={
              user.photos
                ? user.photos.startsWith("/")
                  ? user.photos
                  : `/${user.photos}`
                : "/fabricio.jpg"
            }
            alt="User Image"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col text-center gap-4">
          <h1 className="text-4xl font-bold">{user.username}</h1>
          <p className="text-blue-950  text-lg">{user.email}</p>
          <p className="text-blue-950  text-lg">
            Birthdate: {format(new Date(user.birthdate), "MMMM dd, yyyy")}
          </p>
          <p className="text-blue-950  text-lg">Gender: {user.gender}</p>
          <p className="text-blue-950 text-xl overflow-hidden overflow-ellipsis max-w-lg whitespace-pre-line">
            {user.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
