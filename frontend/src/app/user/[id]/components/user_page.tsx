"use client";
import Image from "next/image";
import { format } from "date-fns";
import { FaRegUser } from "react-icons/fa";

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  birthdate: Date;
  gender: string;
  bio?: string | null;
  photos?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export function UserPage() {
  let user = JSON.parse(localStorage.getItem("user") || "[]");
  
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-16 lg:p-24 pt-20 md:pt-32 text-blue-950 min-h-screen w-screen bg-gradient-to-tr dark:from-gray-800 dark:to-black-700">
      <div
        className="flex flex-col items-center justify-center p-10 py-20 rounded-md "
        style={{
          background:
            "linear-gradient(to bottom right, #94BBE9 0%, #EEAECA 100%)",
        }}
      >
        <div className="mb-8 border-2 border-gray-400 rounded-full overflow-hidden p-2 shadow-md">
          {user.photos ? (
            <Image
              src={user.photos}
              alt="User Image"
              width={200}
              height={200}
              className="rounded-full"
            />
          ) : (
            <FaRegUser size={200} className="rounded-full" />
          )}
        </div>
        <div className="flex flex-col text-center gap-4">
          <h1 className="text-4xl font-bold">Nome: {user.username}</h1>
          <p className="text-blue-950  text-lg">Email: {user.email}</p>
          <p className="text-blue-950  text-lg">
            Birthdate: {format(new Date(user.birthdate), "dd, MM, yyyy")}
          </p>
          <p className="text-blue-950  text-lg">Gender: {user.gender}</p>
          <p className="text-blue-950 text-xl overflow-hidden overflow-ellipsis max-w-lg whitespace-pre-line">
            Bio: {user.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
