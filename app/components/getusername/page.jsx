"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const GetUsername = ({user}) => {
  
  // console.log(session, status);

  return <div className="font-bold text-lg">{user.name}</div>;
};

export default GetUsername;
